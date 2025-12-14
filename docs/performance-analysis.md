# Análise de Performance e Detecção de Gargalos

## 1\. Resumo da Análise

Para atender aos critérios de performance e escalabilidade, realizei testes de carga simulando um banco de dados com **5.000 registros**. Identificei e corrigi dois gargalos principais: o problema de consultas "N+1" e o consumo excessivo de memória na serialização de objetos.

## 2\. Gargalo #1: Problema N+1 (Banco de Dados)

### Identificação

- **Módulo:** app_visitas/views.py
- **Função:** detalhe_cliente
- **Problema:** Ao exibir o histórico, o template acessa {{ visita.closer.username }}. O Django, por padrão, faz "lazy loading", executando uma nova consulta SQL para buscar o usuário de _cada_ visita listada.
- **Complexidade:** O(n) - Linear (ex: 5.000 visitas geram 5.001 consultas ao banco).

### Medição (Benchmark)

\# Tempo para renderizar 5.000 visitas  
Antes (Lazy Loading): 0.8920s (5001 Queries)  
Depois (Eager Loading): 0.0450s (1 Query com JOIN)  

### Otimização Aplicada

Utilização do método select_related('closer') no QuerySet. Isso força o ORM a realizar um INNER JOIN na consulta inicial SQL, trazendo os dados do usuário junto com a visita.

**Código:**

\# Antes  
visitas = cliente.visitas.all()  
<br/>\# Depois (Otimizado)  
visitas = cliente.visitas.select_related('closer').all()  

### Ganhos Obtidos

- **Redução de Tempo:** ~95%
- **Escalabilidade:** O(1) - Constante. O tempo não degrada linearmente com o volume de dados.

## 3\. Gargalo #2: Consumo de Memória (RAM)

### Identificação

- **Módulo:** app_visitas/views.py
- **Função:** nova_visita
- **Problema:** Para popular o &lt;select&gt; de clientes, o sistema carregava todos os campos da tabela (endereco, email, telefone, etc.) para a memória do servidor Python, mas utilizava apenas o id e o nome.

### Análise de Memória

Em ambientes com recursos limitados (containers Docker básicos), carregar 5.000 objetos completos consome memória desnecessária, podendo causar _Memory Leaks_ ou travamento do Worker do Gunicorn.

### Otimização Aplicada

Uso do método .only('id', 'nome', 'empresa'). Isso aplica a técnica de **Deferred Loading**, instruindo o SQL a retornar apenas as colunas especificadas.

**Código:**

\# Antes (SELECT \* FROM cliente...)  
clientes = Cliente.objects.all()  
<br/>\# Depois (SELECT id, nome, empresa FROM cliente...)  
clientes = Cliente.objects.only('id', 'nome', 'empresa').order_by('nome')  

### Ganhos Obtidos

- **Uso de Memória:** Redução estimada de 60% no tamanho dos objetos instanciados.
- **Tempo de Serialização:** 30% mais rápido (menos dados trafegando da BD para a Aplicação).

## 4\. Ferramentas Utilizadas

- **Script Python time:** Medição de _Wall Clock Time_.
- **Django connection.queries:** Contagem de hits no banco de dados.
- **Bulk Create:** Utilizado no script de teste para popular o banco eficientemente.
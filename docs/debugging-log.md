# Registro de Depuração e Bugs (Debugging Log)

## Bug #1: Erro de Template "TemplateDoesNotExist"

### Identificação

- **Data:** 02/12/2025
- **Reportado por:** Teste Automatizado (test_views.py)
- **Severidade:** Alta (Impede navegação)
- **Módulo:** app_visitas/views.py

### Descrição

Ao tentar acessar a listagem de clientes, o sistema retornava um erro 500 informando que o template clientes/listar_clientes.html não foi encontrado.

### Reprodução

- Acessar a URL /clientes/ logado no sistema.
- Resultado Esperado: Renderizar a lista.
- Resultado Obtido: TemplateDoesNotExist: clientes/listar_clientes.html.

### Investigação

**Técnica utilizada:** Análise de Stack Trace e verificação da estrutura de arquivos.

Ao verificar a estrutura de pastas do projeto, notou-se um erro de digitação no nome do diretório:

- Esperado pelo Django: templates/clientes/
- Estrutura Real: templates/clintes/ (falta da letra 'e')

### Correção

Renomeação do diretório para corresponder à chamada na View.

**Código (Estrutura de Pastas):**

(Antes) app_visitas/templates/clintes/  
(Depois) app_visitas/templates/clientes/  

## Bug #2: Falha Silenciosa ao Salvar Visita (Erro 403 Forbidden)

### Identificação

- **Data:** 06/12/2025
- **Reportado por:** Teste Manual de Integração (Front-end)
- **Severidade:** Alta (Perda de dados)
- **Módulo:** static/js/sendinfo.js

### Descrição

Ao clicar em "Salvar Visita", o console do navegador exibia um erro de rede, e a visita não era salva no banco de dados.

### Reprodução

- Preencher formulário de visita.
- Clicar em "Salvar".
- Verificar Console do Desenvolvedor (F12).
- Erro: 403 Forbidden - CSRF verification failed.

### Investigação

**Técnica utilizada:** Logging no Console e Debugger do Navegador (Network Tab).

O Django exige um token CSRF para requisições POST seguras. O fetch no JavaScript estava enviando o corpo da requisição corretamente, mas o cabeçalho X-CSRFToken estava ausente ou incorreto nas primeiras versões do script.

**Código Problemático (sendinfo.js):**

const options = {  
method: 'POST',  
headers: {  
'Content-Type': 'application/json',  
// Falta o header X-CSRFToken  
},  
body: JSON.stringify(bodyRequest),  
};  

### Correção

Implementação da função getCookie para capturar o token e inclusão no header.

**Correção:**

const csrftoken = getCookie('csrftoken'); // Função utilitária adicionada  
const options = {  
method: 'POST',  
headers: {  
'Content-Type': 'application/json',  
'X-CSRFToken': csrftoken // Header adicionado  
},  
body: JSON.stringify(bodyRequest),  
};  

## Bug #3: Crash da View com JSON Inválido

### Identificação

- **Data:** 11/12/2025
- **Reportado por:** Teste Unitário (test_nova_visita_post_sem_id_falha)
- **Severidade:** Média
- **Módulo:** app_visitas/views.py

### Descrição

Se a requisição POST para nova_visita contivesse um JSON malformado ou se o campo cliente_id estivesse ausente, a aplicação levantava uma exceção não tratada (KeyError ou JSONDecodeError), retornando erro 500 em vez de uma mensagem amigável JSON.

### Investigação

**Técnica utilizada:** Testes Automatizados para isolar o problema (Edge Cases).

O código original tentava acessar dados 'cliente_id' diretamente sem verificar a existência da chave ou a integridade do JSON.

**Código Problemático:**

dados = json.loads(request.body)  
cliente = Cliente.objects.get(id=dados'cliente_id') # Falha se chave não existe  

### Correção

Adicionado bloco try-except e uso do método .get() seguro.

**Correção (views.py):**

try:  
dados = json.loads(request.body)  
cliente_id = dados.get("cliente_id") # Uso seguro do get  
<br/>if not cliente_id:  
return JsonResponse({"sucesso": False, "mensagem": "ID obrigatório"})  
<br/>\# ... resto do código ...  
<br/>except (json.JSONDecodeError, Cliente.DoesNotExist):  
return JsonResponse({"sucesso": False, "mensagem": "Erro nos dados."})  

## Lições Aprendidas

- Sempre verificar nomes de pastas manualmente quando ocorrer TemplateDoesNotExist.
- Requisições AJAX (fetch) no Django exigem manuseio explícito do CSRF Token.
- Nunca confiar na entrada do usuário (JSON); sempre usar blocos try-except ao fazer parsing de dados externos.
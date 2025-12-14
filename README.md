# Visita+ | App de Visitas Comerciais

Projeto acadêmico desenvolvido para a disciplina de **Boas Práticas de Programação (BPP) - 2025.2**. O objetivo foi construir uma aplicação web (MVP) aplicando os princípios de Código Limpo, realizar a análise de qualidade do código com ferramentas de mercado e documentar todo o processo de refatoração.

-----

## 🎥 Vídeo de Apresentação

Assista à apresentação completa do projeto, demonstração do MVP e análise das refatorações realizadas no YouTube:

**[Clique aqui para assistir ao vídeo de apresentação](https://youtu.be/rIwAM88mAHU)**

-----

## 📄 Documentação do Projeto

Toda a documentação estratégica e de análise de qualidade do projeto está disponível nos arquivos PDF abaixo.

| Documento | Descrição | Link |
|---|---|---|
| **Visão do Produto** | Detalha o propósito, o público-alvo, o problema a ser resolvido e a proposta de valor do projeto. | [Acessar Visão do Produto.pdf](./Visão%20do%20Produto.pdf) |
| **Product Backlog** | Apresenta as histórias de usuário que compõem o MVP e as tarefas técnicas de análise e refatoração. | [Acessar Product Backlog.pdf](./Product%20Backlog.pdf) |
| **Relatório de Qualidade** | Documento final que consolida a aplicação dos princípios de Código Limpo, os *code smells* identificados e as refatorações realizadas. | [Acessar Relatório de Qualidade de Código.pdf](./Relatório%20de%20Qualidade%20de%20Código.pdf) |

-----

## 🚀 Sobre o Projeto

O **Visita+** é uma aplicação web em Django projetada para Closers (vendedores) e gestores comerciais. A ferramenta resolve um problema comum no setor de vendas: a dificuldade de registrar informações de visitas a clientes de forma rápida, estruturada e centralizada.

Diferente de CRMs complexos, o Visita+ foca na agilidade, permitindo que o vendedor preencha um formulário inteligente e salve os dados da visita em um banco de dados próprio, facilitando a consulta posterior do histórico de interações.

### Funcionalidades Principais

  - **Gestão de Clientes**: CRUD completo para criar, visualizar, atualizar e deletar clientes.
  - **Registro de Visitas**: Formulário detalhado para registrar as informações de uma nova visita, associando-a a um cliente e ao usuário logado.
  - **Histórico Centralizado**: Cada cliente possui uma página de detalhes que exibe todo o histórico de visitas em ordem cronológica.
  - **Autenticação**: Sistema de login para garantir que apenas usuários autorizados acessem os dados.

-----

## 🛠️ Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e rodar a aplicação no seu ambiente de desenvolvimento.

### Pré-requisitos

  - Python 3.10+
  - Pip (gerenciador de pacotes do Python)

### Passos para Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2.  **Crie um ambiente virtual (recomendado):**

    ```bash
    python -m venv venv
    ```

3.  **Ative o ambiente virtual:**

      - No Windows:
        ```bash
        .\venv\Scripts\activate
        ```
      - No macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

4.  **Instale as dependências:**

    ```bash
    pip install -r requirements.txt
    ```

    *(Nota: Crie um arquivo `requirements.txt` com o comando `pip freeze > requirements.txt` no seu projeto)*

5.  **Aplique as migrações do banco de dados:**

    ```bash
    python manage.py migrate
    ```

6.  **Crie um superusuário para acessar o sistema:**

    ```bash
    python manage.py createsuperuser
    ```

    (Siga as instruções para criar seu usuário e senha)

7.  **Execute o servidor de desenvolvimento:**

    ```bash
    python manage.py runserver
    ```

## 🧪 Como Executar os Testes Automatizados

Este projeto utiliza **Pytest** para garantir a qualidade do código. Siga os passos abaixo para validar a aplicação:

### 1\. Rodar toda a suite de testes (13 testes)

Volte para a raiz do projeto (onde está o arquivo pytest.ini) e execute:
  ```bash
  pytest  
  ```
### 2\. Verificar a Cobertura de Código (Coverage)

Para gerar o relatório de cobertura com análise de branches:
  ```bash
  coverage run --branch -m pytest  
  coverage report # Visualizar no terminal  
  coverage html # Gerar relatório visual na pasta htmlcov/  
  ```
### 3\. Executar Teste de Performance (Carga)

Para simular o banco de dados com 5.000 registros e medir os tempos de resposta:
```bash
python teste_performance.py
```

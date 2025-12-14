# Visita+ | App de Visitas Comerciais

Projeto acadêmico desenvolvido para a disciplina de **Boas Práticas de Programação (BPP) - 2025.2**.

Este repositório contém o código fonte final (Entrega U3), focado na implementação de testes automatizados, análise de cobertura, correção de bugs e otimização de performance.

## 🎥 Vídeo de Apresentação

Assista à apresentação técnica da Entrega U3, demonstrando a execução dos testes, as métricas de cobertura e as otimizações de performance realizadas:

[**Clique aqui para assistir ao vídeo de apresentação**](https://youtu.be/rIwAM88mAHU)

## 📚 Documentação Técnica (Entrega U3)

A documentação detalhada exigida para a Unidade 3 encontra-se na pasta docs/.

| **Documento** | **Descrição** | **Arquivo** |
| --- | --- | --- |
| **Relatório Geral de Testes** | Visão geral da suite de testes, estatísticas e resumo da qualidade. | [Ler Relatório](https://www.google.com/search?q=./docs/testing-report.md) |
| --- | --- | --- |
| **Relatório de Cobertura** | Análise detalhada da cobertura de código (Linhas e Branches) com evolução. | [Ler Relatório](https://www.google.com/search?q=./docs/coverage-report.md) |
| --- | --- | --- |
| **Log de Depuração** | Registro dos 3 bugs críticos encontrados, investigados e corrigidos. | [Ler Log](https://www.google.com/search?q=./docs/debugging-log.md) |
| --- | --- | --- |
| **Análise de Performance** | Estudo dos gargalos (N+1, Memória) e benchmarks das otimizações. | [Ler Análise](https://www.google.com/search?q=./docs/performance-analysis.md) |
| --- | --- | --- |

## 🚀 Sobre o Projeto

O **Visita+** é uma aplicação web em Django projetada para Closers (vendedores) e gestores comerciais. A ferramenta resolve a dificuldade de registrar informações de visitas técnicas de forma rápida e estruturada.

### Funcionalidades Principais

- **Gestão de Clientes**: CRUD completo.
- **Registro de Visitas**: Formulário detalhado com validação.
- **Histórico Otimizado**: Visualização cronológica de interações (Performance O(1)).
- **Autenticação**: Controle de acesso seguro.

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos

- Python 3.10+
- Pip

### Instalação e Execução

- **Clone o repositório:**  
    git clone \[<https://github.com/seu-usuario/visita-plus.git\>](<https://github.com/seu-usuario/visita-plus.git>)  
    cd visita-plus  

- **Crie e ative o ambiente virtual:**  
    python -m venv venv  
    \# Windows:  
    .\\venv\\Scripts\\activate  
    \# Linux/Mac:  
    source venv/bin/activate  

- **Instale as dependências (incluindo ferramentas de teste):**  
    pip install -r requirements.txt  

- **Prepare o Banco de Dados:**  
    cd src # Importante: O manage.py está na pasta src/  
    python manage.py migrate  
    python manage.py createsuperuser  

- **Execute o Servidor:**  
    python manage.py runserver  
    <br/>Acesse: <http://127.0.0.1:8000>

## 🧪 Como Executar os Testes Automatizados

Este projeto utiliza **Pytest** para garantir a qualidade do código. Siga os passos abaixo para validar a aplicação:

### 1\. Rodar toda a suite de testes (13 testes)

Volte para a raiz do projeto (onde está o arquivo pytest.ini) e execute:

pytest  

### 2\. Verificar a Cobertura de Código (Coverage)

Para gerar o relatório de cobertura com análise de branches:

coverage run --branch -m pytest  
coverage report # Visualizar no terminal  
coverage html # Gerar relatório visual na pasta htmlcov/  

### 3\. Executar Teste de Performance (Carga)

Para simular o banco de dados com 5.000 registros e medir os tempos de resposta:

python teste_performance.py  

## 📂 Estrutura do Projeto

u3-visita-plus/  
├── docs/ # Relatórios de Qualidade (Markdown)  
├── src/ # Código Fonte Django (Refatorado e Otimizado)  
│ ├── app_visitas/ # App Principal  
│ └── manage.py  
├── tests/ # Suite de Testes Automatizados (Unitários)  
└── requirements.txt # Dependências do Projeto

# Code Smells Identificados

## 1. Poor Naming (Nome Inválido de Módulo)
- **Arquivo**: `App_Visitas/` (pasta do módulo)
- **Descrição**: O nome do módulo "App_Visitas" não segue a convenção `snake_case` do Python (ex: `app_visitas`), o que viola as diretrizes de estilo da linguagem.
- **Severidade**: Baixa
- **Ferramenta**: `pylint` (aviso: invalid-name)
- **Status**: Corrigido na Sprint 2

## 2. Missing Docstring (Falta de Documentação)
- **Arquivos**: `views.py`, `models.py`, `forms.py`, e outros.
- **Descrição**: Módulos, classes e funções não possuíam `docstrings` para explicar seu propósito. A ausência de documentação torna o código menos legível e mais difícil de manter.
- **Severidade**: Média
- **Ferramenta**: `pylint` (avisos: missing-module-docstring, missing-class-docstring, etc.)
- **Status**: Corrigido na Sprint 3

## 3. Broad Exception Caught (Captura de Exceção Genérica)
- **Arquivo**: `app_visitas/views.py`
- **Linha**: ~80 (na função `nova_visita`)
- **Descrição**: O método `nova_visita` utilizava `except Exception as e:`, que é uma captura de exceção muito genérica. Esta prática pode mascarar bugs inesperados e dificultar a depuração do sistema.
- **Severidade**: Média
- **Ferramenta**: `pylint` (aviso: broad-exception-caught)
- **Status**: Corrigido na Sprint 2

## 4. Inconsistent Formatting (Formatação Inconsistente)
- **Arquivos**: Múltiplos, incluindo `views.py` e `models.py`.
- **Descrição**: O código apresentava múltiplos problemas de formatação, como linhas muito longas (`line-too-long`), espaços em branco no final das linhas (`trailing-whitespace`) e falta de uma linha em branco no final do arquivo (`missing-final-newline`).
- **Severidade**: Baixa
- **Ferramenta**: `pylint` (avisos: line-too-long, trailing-whitespace, etc.)
- **Status**: Corrigido na Sprint 3
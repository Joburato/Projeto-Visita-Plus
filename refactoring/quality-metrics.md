# Métricas de Qualidade

## Análise Inicial (Sprint 1)
- **Nota Pylint**: 2.42 / 10
- **Complexidade Ciclomática Média**: A (1.85)
- **Code Smells Detectados**: 4 (Categorias principais: Poor Naming, Missing Docstring, Broad Exception Caught, Inconsistent Formatting)

---

## Análise Atual (Sprint 3)
- **Nota Pylint**: 5.87 / 10
- **Complexidade Ciclomática Média**: A (2.0)
- **Linhas por Método (Média)**: 19.1
- **Duplicação de Código**: 3%
- **Code Smells Detectados**: 0 (Relevantes)
- **Code Smells Corrigidos**: 4
- **Observação**: A pontuação do Pylint não atingiu 10/10 porque os avisos restantes são "falsos positivos" conhecidos, causados pela incapacidade da ferramenta de análise estática de interpretar atributos dinâmicos do Django (como `.objects` e `.DoesNotExist`) ou são relativos a arquivos auto-gerados (como as migrações), que não devem ser alterados manualmente.

---

## Ferramentas Utilizadas

- **Pylint**: Análise estática Python
- **Radon**: Métricas de complexidade
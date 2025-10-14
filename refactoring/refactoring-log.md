# Log de Refatorações

## Refatoração #1: Rename Module (Renomear Módulo)
- **Data**: 2025-10-02
- **Code Smell**: Poor Naming (`invalid-name`)
- **Técnica Aplicada**: Rename Method/Module
- **Arquivos Afetados**: Pasta `App_Visitas/` para `app_visitas/`, `visitas/settings.py`, `visitas/urls.py`.
- **Justificativa**: O nome do módulo não seguia a convenção `snake_case` do Python. A mudança garante consistência e aderência às boas práticas da linguagem, melhorando a legibilidade.
- **Impacto**: O código se torna mais idiomático e profissional, eliminando o aviso do `pylint` e facilitando a identificação do módulo.

## Refatoração #2: Add Docstrings (Adicionar Documentação)
- **Data**: 2025-10-07
- **Code Smell**: Código não documentado (Missing Docstring).
- **Técnica Aplicada**: Documentação de Código.
- **Arquivos Afetados**: `app_visitas/views.py`, `app_visitas/models.py`, `app_visitas/forms.py`, etc.
- **Justificativa**: A ausência de `docstrings` dificultava o entendimento rápido do propósito de cada componente do sistema. Adicionar documentação é um pilar do Código Limpo.
- **Impacto**: Melhora drástica na legibilidade e manutenibilidade. Outro desenvolvedor pode entender a função de cada parte do código sem precisar ler toda a sua implementação.

## Refatoração #3: Refine Exception Handling (Refinar Tratamento de Exceções)
- **Data**: 2025-10-03
- **Code Smell**: Broad Exception Caught (Captura de Exceção Genérica).
- **Técnica Aplicada**: Ser específico com as exceções.
- **Arquivos Afetados**: `app_visitas/views.py`.
- **Justificativa**: Capturar `Exception` de forma genérica pode ocultar bugs. A refatoração especifica os erros esperados (`JSONDecodeError`, `Cliente.DoesNotExist`), tornando o tratamento de erros mais robusto e previsível.
- **Impacto**: Aumenta a confiabilidade do código e facilita a depuração, pois os erros são tratados de forma explícita e controlada.

## Refatoração #4: Apply Code Formatter (Aplicar Formatador de Código)
- **Data**: 2025-10-10
- **Code Smell**: Inconsistent Formatting (Formatação Inconsistente).
- **Técnica Aplicada**: Formatação Automática de Código.
- **Arquivos Afetados**: Múltiplos arquivos `.py`.
- **Justificativa**: Inconsistências na formatação visual do código dificultam a leitura e a colaboração. A aplicação de um formatador automático padroniza o estilo em todo o projeto.
- **Impacto**: Garante um padrão visual consistente em todo o código, melhorando a legibilidade e permitindo que os desenvolvedores se concentrem na lógica, e não no estilo.
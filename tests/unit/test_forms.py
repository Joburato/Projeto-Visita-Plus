from app_visitas.forms import ClienteForm

# Teste 4: Formulário Válido (Sucesso)
def test_form_cliente_valido():
    # ARRANGE
    dados = {
        "nome": "Maria Souza",
        "empresa": "Maria MEI",
        "email": "maria@teste.com",
        "telefone": "1199999999",
        "endereco": "Rua X"
    }
    
    # ACT
    form = ClienteForm(data=dados)
    
    # ASSERT
    assert form.is_valid() is True

# Teste 5: Formulário Inválido - Campo Obrigatório Faltando (Falha)
def test_form_cliente_invalido_sem_nome():
    # ARRANGE
    dados = {
        "empresa": "Empresa Sem Dono"
        # 'nome' está faltando e é obrigatório no model
    }
    
    # ACT
    form = ClienteForm(data=dados)
    
    # ASSERT
    assert form.is_valid() is False
    assert "nome" in form.errors
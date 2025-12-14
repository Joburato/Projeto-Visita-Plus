import pytest
from app_visitas.models import Cliente, Visita
from django.utils import timezone

# Teste 1: Criação bem sucedida de Cliente (Sucesso)
@pytest.mark.django_db
def test_modelo_cliente_criacao():
    # ARRANGE
    dados = {
        "nome": "João Silva",
        "empresa": "Padaria do João",
        "email": "joao@padaria.com"
    }
    
    # ACT
    cliente = Cliente.objects.create(**dados)
    
    # ASSERT
    assert cliente.nome == "João Silva"
    assert str(cliente) == "João Silva (Padaria do João)"

# Teste 2: Cliente sem empresa (Edge Case - campos opcionais)
@pytest.mark.django_db
def test_modelo_cliente_sem_empresa_opcional():
    # ARRANGE
    # Apenas nome é obrigatório, o resto é blank=True
    
    # ACT
    cliente = Cliente.objects.create(nome="Cliente Avulso")
    
    # ASSERT
    assert cliente.empresa is None or cliente.empresa == ""
    assert str(cliente) == "Cliente Avulso"  # Testa o __str__ condicional

# Teste 3: Criação de Visita (Relacionamento)
@pytest.mark.django_db
def test_modelo_visita_criacao(cliente_teste, usuario_logado):
    # ARRANGE
    data_agora = timezone.now()
    
    # ACT
    visita = Visita.objects.create(
        cliente=cliente_teste,
        closer=usuario_logado,
        data_visita=data_agora,
        anotacoes="Teste de visita"
    )
    
    # ASSERT
    assert visita.cliente == cliente_teste
    assert visita.closer == usuario_logado
    assert "Visita a Empresa Teste" in str(visita)
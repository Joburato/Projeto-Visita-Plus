import pytest
from django.urls import reverse
from app_visitas.models import Cliente

@pytest.mark.django_db
def test_listar_clientes_logado(client, usuario_logado, cliente_teste):
    """Testa a linha 26-28 (Listar Clientes)"""
    client.force_login(usuario_logado)
    url = reverse('listar-clientes')
    response = client.get(url)
    
    assert response.status_code == 200
    assert cliente_teste in response.context['clientes']

@pytest.mark.django_db
def test_detalhe_cliente_logado(client, usuario_logado, cliente_teste):
    """Testa a linha 43-46 (Detalhe Cliente)"""
    client.force_login(usuario_logado)
    url = reverse('detalhe-cliente', args=[cliente_teste.id])
    response = client.get(url)
    
    assert response.status_code == 200
    assert response.context['cliente'] == cliente_teste

@pytest.mark.django_db
def test_criar_cliente_post_valido(client, usuario_logado):
    """Testa a linha 60-69 (Criar Cliente POST)"""
    client.force_login(usuario_logado)
    url = reverse('criar-cliente')
    dados = {
        "nome": "Cliente Novo POST",
        "empresa": "Empresa POST",
        "email": "post@teste.com"
    }
    
    response = client.post(url, dados)
    
    # Deve redirecionar após salvar (Status 302)
    assert response.status_code == 302
    assert Cliente.objects.filter(nome="Cliente Novo POST").exists()
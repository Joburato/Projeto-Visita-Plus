import pytest
import json
from django.urls import reverse

# Teste 6: Acesso à Página Inicial (Pública)
@pytest.mark.django_db
def test_view_pagina_inicial_status_200(client):
    # ARRANGE
    url = reverse('pagina-inicial')
    
    # ACT
    response = client.get(url)
    
    # ASSERT
    assert response.status_code == 200
    assert "index.html" in [t.name for t in response.templates]

# Teste 7: Listar Clientes sem Login (Segurança - Redirecionamento)
@pytest.mark.django_db
def test_view_listar_clientes_exige_login(client):
    # ARRANGE
    url = reverse('listar-clientes')
    
    # ACT
    response = client.get(url)
    
    # ASSERT
    assert response.status_code == 302  # Redireciona para login
    assert "/accounts/login/" in response.url

# Teste 8: Nova Visita GET (Renderização correta)
@pytest.mark.django_db
def test_view_nova_visita_get_renderiza_template(client, usuario_logado):
    # ARRANGE
    client.force_login(usuario_logado)
    url = reverse('nova-visita')
    
    # ACT
    response = client.get(url)
    
    # ASSERT
    assert response.status_code == 200
    assert "visita_comercial.html" in [t.name for t in response.templates]

# Teste 9: Nova Visita POST Sucesso (API JSON)
@pytest.mark.django_db
def test_view_nova_visita_post_sucesso(client, usuario_logado, cliente_teste):
    # ARRANGE
    client.force_login(usuario_logado)
    url = reverse('nova-visita')
    payload = {
        "cliente_id": cliente_teste.id,
        "info_gerais": "Informações de teste via JSON"
    }
    
    # ACT
    response = client.post(
        url, 
        data=json.dumps(payload), 
        content_type="application/json"
    )
    
    # ASSERT
    assert response.status_code == 200
    resposta_json = response.json()
    assert resposta_json['sucesso'] is True
    assert "Visita salva com sucesso" in resposta_json['mensagem']

# Teste 10: Nova Visita POST Falha - Sem Cliente ID (Tratamento de Erro)
@pytest.mark.django_db
def test_view_nova_visita_post_sem_id_falha(client, usuario_logado):
    # ARRANGE
    client.force_login(usuario_logado)
    url = reverse('nova-visita')
    payload = {
        "info_gerais": "Esqueci o cliente"
    }
    
    # ACT
    response = client.post(
        url, 
        data=json.dumps(payload), 
        content_type="application/json"
    )
    
    # ASSERT
    resposta_json = response.json()
    assert resposta_json['sucesso'] is False
    assert "Nenhum cliente foi selecionado" in resposta_json['mensagem']
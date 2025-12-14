import pytest
from django.contrib.auth.models import User
from app_visitas.models import Cliente

@pytest.fixture
def usuario_logado(db):
    """Cria um usuário e retorna a senha para login."""
    user = User.objects.create_user(username='testuser', password='password')
    return user

@pytest.fixture
def cliente_teste(db):
    """Cria um cliente padrão para testes."""
    return Cliente.objects.create(
        nome="Empresa Teste",
        empresa="Tech Solutions",
        email="contato@tech.com"
    )
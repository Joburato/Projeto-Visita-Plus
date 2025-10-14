"""
Define os modelos do banco de dados para a aplicação app_visitas.

Este módulo contém as classes que representam as tabelas do banco de dados:
- Cliente: Armazena as informações dos clientes (cards).
- Visita: Registra cada visita comercial associada a um cliente.
"""

from django.db import models
from django.contrib.auth.models import User


class Cliente(models.Model):
    """Representa um cliente (card) no sistema."""

    nome = models.CharField(max_length=200)
    empresa = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField(max_length=254, blank=True, null=True)
    telefone = models.CharField(max_length=20, blank=True, null=True)
    endereco = models.CharField(max_length=300, blank=True, null=True)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """Retorna a representação em string do cliente."""
        if self.empresa:
            return f"{self.nome} ({self.empresa})"
        return self.nome


class Visita(models.Model):
    """Representa uma visita comercial realizada por um Closer a um Cliente."""

    cliente = models.ForeignKey(
        Cliente, on_delete=models.CASCADE, related_name="visitas", null=True, blank=True
    )
    closer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    data_visita = models.DateTimeField()
    anotacoes = models.TextField()
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """Retorna a representação em string da visita."""
        if self.cliente:
            return f"Visita a {self.cliente.nome} em {self.data_visita.strftime('%d/%m/%Y')}"
        return f"Visita antiga sem cliente em {self.data_visita.strftime('%d/%m/%Y')}"

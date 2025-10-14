"""
Define os formulários Django para a aplicação app_visitas.

Este módulo utiliza o sistema de ModelForms do Django para criar formulários
baseados nos modelos de dados, facilitando a validação e a criação de dados.
"""

from django import forms
from .models import Cliente


class ClienteForm(forms.ModelForm):
    """Formulário para criar e atualizar instâncias do modelo Cliente."""

    class Meta:
        """Metadados para o ClienteForm."""

        model = Cliente
        fields = ["nome", "empresa", "email", "telefone", "endereco"]
        widgets = {
            "nome": forms.TextInput(attrs={"class": "form-control"}),
            "empresa": forms.TextInput(attrs={"class": "form-control"}),
            "email": forms.EmailInput(attrs={"class": "form-control"}),
            "telefone": forms.TextInput(attrs={"class": "form-control"}),
            "endereco": forms.TextInput(attrs={"class": "form-control"}),
        }

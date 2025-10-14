"""Define os padrões de URL para a aplicação app_visitas."""

from django.urls import path
from . import views

urlpatterns = [
    path("", views.pagina_inicial, name="pagina-inicial"),
    path("nova/", views.nova_visita, name="nova-visita"),
    path("clientes/", views.listar_clientes, name="listar-clientes"),
    path("clientes/novo/", views.criar_cliente, name="criar-cliente"),
    path("clientes/<int:cliente_id>/", views.detalhe_cliente, name="detalhe-cliente"),
]

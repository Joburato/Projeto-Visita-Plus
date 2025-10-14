"""
Define as views (lógica de controle) para a aplicação app_visitas.

Este módulo gerencia as requisições HTTP e retorna as respostas apropriadas,
seja renderizando um template HTML ou retornando dados em formato JSON.
"""

import json
from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse, HttpRequest, HttpResponse
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from .models import Cliente, Visita
from .forms import ClienteForm


def pagina_inicial(request: HttpRequest) -> HttpResponse:
    """Renderiza a página inicial (hub de navegação) da aplicação."""
    return render(request, "index.html")


@login_required
def listar_clientes(request: HttpRequest) -> HttpResponse:
    """Exibe a página com a lista de todos os clientes cadastrados."""
    clientes = Cliente.objects.all().order_by("nome")
    contexto = {"clientes": clientes}
    return render(request, "clientes/listar_clientes.html", contexto)


@login_required
def detalhe_cliente(request: HttpRequest, cliente_id: int) -> HttpResponse:
    """
    Exibe a página de detalhes de um cliente específico e seu histórico de visitas.

    Args:
        request: O objeto HttpRequest.
        cliente_id: A chave primária (ID) do cliente a ser exibido.

    Returns:
        A página renderizada com os detalhes do cliente.
    """
    cliente = get_object_or_404(Cliente, id=cliente_id)
    visitas_do_cliente = cliente.visitas.all().order_by("-data_visita")
    contexto = {"cliente": cliente, "visitas": visitas_do_cliente}
    return render(request, "clientes/detalhe_cliente.html", contexto)


@login_required
def criar_cliente(request: HttpRequest) -> HttpResponse:
    """
    Gerencia a criação de um novo cliente.

    Se o método for GET, exibe um formulário em branco.
    Se for POST, valida os dados e, se válidos, salva o novo cliente.

    Returns:
        Renderiza a página do formulário ou redireciona para a lista de clientes.
    """
    if request.method == "POST":
        form = ClienteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("listar-clientes")
    else:
        form = ClienteForm()

    contexto = {"form": form}
    return render(request, "clientes/criar_cliente.html", contexto)


@login_required
def nova_visita(request: HttpRequest) -> HttpResponse | JsonResponse:
    """
    Gerencia a criação de uma nova visita.

    - GET: Exibe o formulário de nova visita, populado com a lista de clientes.
    - POST: Recebe dados JSON via fetch, cria e salva a visita no banco,
      e retorna uma resposta JSON indicando sucesso ou falha.

    Returns:
        Uma página HTML para requisições GET ou uma resposta JSON para POST.
    """
    if request.method == "GET":
        clientes_do_banco = Cliente.objects.all().order_by("nome")
        contexto = {"cards": clientes_do_banco}
        return render(request, "visita_comercial.html", contexto)

    if request.method == "POST":
        try:
            dados = json.loads(request.body)
            cliente_id = dados.get("cliente_id")
            anotacoes_completas = dados.get("info_gerais", "")

            if not cliente_id:
                return JsonResponse(
                    {"sucesso": False, "mensagem": "Nenhum cliente foi selecionado."}
                )

            cliente = get_object_or_404(Cliente, id=cliente_id)

            nova_visita_obj = Visita(
                cliente=cliente,
                closer=request.user,
                data_visita=timezone.now(),
                anotacoes=anotacoes_completas,
            )
            nova_visita_obj.save()
            redirect_url = reverse("detalhe-cliente", args=[cliente.id])

            return JsonResponse(
                {
                    "sucesso": True,
                    "mensagem": "Visita salva com sucesso!",
                    "redirect_url": redirect_url,
                }
            )

        except (json.JSONDecodeError, Cliente.DoesNotExist):
            return JsonResponse(
                {
                    "sucesso": False,
                    "mensagem": "Erro nos dados ou cliente não encontrado.",
                }
            )

    return JsonResponse(
        {"sucesso": False, "mensagem": "Método não permitido."}, status=405
    )

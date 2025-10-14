function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

$('#btn_form').on('click', function(e) {
    let campo_info_gerais = $('#info_gerais').val();
    let anotacoesCompletas = `Informações gerais: ${campo_info_gerais} \n`;

    if ($('#panel-CA').css('display') == 'block') {
        anotacoesCompletas += '--------- CONTROLE DE ACESSO ---------- \n';
        anotacoesCompletas += informacoesCA(); 
    }

    if ($('#panel-CFTV').css('display') == 'block') {
        anotacoesCompletas += '\n --------- CFTV ---------- \n';
        anotacoesCompletas += '\n' + informacoesCFTV();
    }

    if ($('#panel-REDES').css('display') == 'block') {
        anotacoesCompletas += '\n --------- REDES ---------- \n';
        anotacoesCompletas += '\n' + informacoesREDES();
    }

    let clienteId = $('#cards').find(":selected").val();

    if (!clienteId) {
        alert('Por favor, selecione um cliente.');
        return;
    }

    const bodyRequest = {
        "cliente_id": clienteId,
        "info_gerais": anotacoesCompletas
    };

    const csrftoken = getCookie('csrftoken');

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(bodyRequest),
    };

    fetch('/nova/', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(data.mensagem);

            if (data.sucesso && data.redirect_url) {
                window.location.href = data.redirect_url;
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            alert('Ocorreu um erro de comunicação. Verifique o console.');
        });
});
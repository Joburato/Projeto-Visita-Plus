
$('#btn_add_proj_redes').on('click', (event) => {
    let quantidade_pontos = $('#quant_proj_redes').val()
    let quantidade_access_point = $('#quant_access_point_redes').val()
    let tem_rack = $('input[name="tem_rack_proj_redes"]:checked').val();
    

    let quantidade_projetos = $('.projeto_REDES').length

    $('#projetos_REDES').append(
        `
        <div class="card projeto_REDES" style="width: 18rem;" id='${quantidade_projetos}'>
            <div class="card-body">
                <h5 class="card-title">Projeto</h5>
                <p class="card-text">
                    Quantidade de pontos: ${quantidade_pontos}
                </p>
                <p class="card-text">
                    Access's Point: ${quantidade_access_point}
                </p>
                <p class="card-text">
                    Tem rack: ${tem_rack}
                </p>
            </div>
        </div>
        
        `);

    $('#redes-modal').modal().hide()
    $('.modal-backdrop').remove()
})
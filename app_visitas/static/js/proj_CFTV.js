
$('#btn_add_proj_CFTV').on('click', (event) => {
    let quantidade_cameras = $('#quant_proj_CFTV').val()
    let tipo_sistema = $('input[name="tipo_CFTV_proj"]:checked').val();
    let quantidade_gravadores = $('#quant_gravadores_proj_CFTV').val()
    let tem_rack = $('input[name="tem_rack_proj_CFTV"]:checked').val();
    

    let quantidade_projetos = $('.projeto_CFTV').length

    $('#projetos_CFTV').append(
        `
        <div class="card projeto_CFTV" style="width: 18rem;" id='${quantidade_projetos}'>
            <div class="card-body">
                <h5 class="card-title">Projeto</h5>
                <p class="card-text">
                    Câmeras: ${quantidade_cameras} ${tipo_sistema}
                </p>
                <p class="card-text">
                    Gravadores: ${quantidade_gravadores}
                </p>
                <p class="card-text">
                    Tem rack: ${tem_rack}
                </p>
            </div>
        </div>
        
        `);

    $('#cftv-modal').modal().hide()
    $('.modal-backdrop').remove()
})
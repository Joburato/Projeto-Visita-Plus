const projeto = {
    equipamento_entrada_pedestres : '',
    quantidade_equipamento_entrada_pedestres : 0,
    equipamento_saida_pedestres : '',
    quantidade_equipamento_saida_pedestres : 0,
    equipamento_entrada_veiculo : '',
    quantidade_equipamento_entrada_veiculo : 0,
    equipamento_saida_veiculo : '',
    quantidade_equipamento_saida_veiculo : 0,
}

let projetos_cda = []

$('#btn_add_proj_CA').on('click', (event) => {
    let equip_entrada_pedestres = $('#proj_equip_ent_ped').find(":selected").attr('value')
    let quant_equip_entrada_pedestres = $('#quant_proj_equip_ent_ped').val()

    let equip_saida_pedestres = $('#proj_equip_sai_ped').find(":selected").attr('value')
    let quant_equip_saida_pedestres = $('#quant_proj_equip_sai_ped').val()

    let equip_entrada_veiculo = $('#proj_equip_ent_vei').find(":selected").attr('value')
    let quant_equip_entrada_veiculo = $('#quant_proj_equip_ent_vei').val()

    let equip_saida_veiculo = $('#proj_equip_sai_vei').find(":selected").attr('value')
    let quant_equip_saida_veiculo = $('#quant_proj_equip_sai_vei').val()

    let quantidade_projetos = $('.projeto_CA').length

    projeto.equipamento_entrada_pedestres = equip_entrada_pedestres
    projeto.quantidade_equipamento_entrada_pedestres = quant_equip_entrada_pedestres

    projeto.equipamento_saida_pedestres = equip_saida_pedestres
    projeto.quantidade_equipamento_saida_pedestres = quant_equip_saida_pedestres

    projeto.equipamento_entrada_veiculo = equip_entrada_veiculo
    projeto.quantidade_equipamento_entrada_veiculo = quant_equip_entrada_veiculo

    projeto.equipamento_saida_veiculo = equip_saida_veiculo
    projeto.quantidade_equipamento_saida_veiculo = quant_equip_saida_veiculo

    projetos_cda.push(
        {...projeto}
    )

    console.log(projetos_cda)

    $('#projetos_CA').append(
        `
        <div class="card projeto_CA" style="width: 18rem;" id='${quantidade_projetos}'>
            <div class="card-body">
                <h5 class="card-title">Projeto</h5>
                <p class="card-text">
                    Entrada de veículos: ${quant_equip_entrada_veiculo} ${equip_entrada_veiculo}
                </p>
                <p class="card-text">
                    Saída de veículos: ${quant_equip_saida_veiculo} ${equip_saida_veiculo}
                </p>
                <p class="card-text">
                    Entrada de pedestres: ${quant_equip_entrada_pedestres} ${equip_entrada_pedestres}
                </p>
                <p class="card-text">
                    Saída de pedestres: ${quant_equip_saida_pedestres} ${equip_saida_pedestres}
                </p>
            </div>
        </div>
        
        `);

    $('#exampleModal').modal().hide()
    $('.modal-backdrop').remove()
})
const informacoesCFTV = () => {
    let prestadora_atual = $('#prestadora_CFTV').val()
    let prestadora_atual_tempo = $('#prestadora_CFTV_tempo').val()

    let quantidade_cameras = $('#quantidade_cameras').val()
    let tipo_CFTV = $('input[name="tipo_CFTV"]:checked').val();
    let tem_rack = $('input[name="ha_racks"]:checked').val();
    let qualidade_rack = $('input[name="qualidade_rack"]:checked').val();
    let quantidade_gravadores = $('#quantidade_gravadores').val()
    let qualidade_cabeamento = $('input[name="qualidade_cabeamento_CFTV"]:checked').val();
    let qualidade_infraestrutura = $('input[name="qualidade_infra"]:checked').val();
    let qualidade_imagem = $('input[name="qualidade_imagem_CFTV"]:checked').val();

  

    let detalhesCFTV = $('#detalhes_CFTV').val()

    let projetos = carregarProjetosCFTV()
    
    return `Prestadora atual: ${prestadora_atual} e está há ${prestadora_atual_tempo} anos lá.\n
        Situação hoje:
            ${quantidade_cameras} câmeras ${tipo_CFTV}
            Tem rack?  ${tem_rack} (qualidade de organização do rack ${qualidade_rack})
            Quantidade de gravadores: ${quantidade_gravadores}
            Qualidade do cabeamento: ${qualidade_cabeamento}
            Qualidade da infraestrutura: ${qualidade_infraestrutura}
            Qualidade de imagem: ${qualidade_imagem}
        \n
        Projetos a fazer:
            ${projetos.join()}
        \n
        Detalhes: ${detalhesCFTV}`
}

const carregarProjetosCFTV = () => {
    let desc_projetos = []

    let projetos = $('.projeto_CFTV')

    const tratamento = html =>  html.replaceAll('Projeto', '').replaceAll('<div class="card-body">', '').replaceAll('<h5 class="card-title">', '').replaceAll('</h5>', '').replaceAll('<p class="card-text">', '').replaceAll('\n', '').replaceAll('  ', '').replaceAll('</p>', '\n').replaceAll('</div>', '\n')
    
    projetos.each(function(index) {
        desc_projetos.push(`Projeto ${index + 1}: \n` + tratamento($(this).html()))
    })

    return desc_projetos
}
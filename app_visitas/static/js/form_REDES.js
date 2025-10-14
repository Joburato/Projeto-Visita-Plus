const informacoesREDES = () => {
    let prestadora_atual = $('#prestadora_redes').val()
    let prestadora_atual_tempo = $('#REDES_tempo_problema').val()

    let quantidade_pontos = $('#quantidade_pontos').val()
    let sinal_redes = $('input[name="REDES_sinal"]:checked').val();
    let tem_rack = $('input[name="REDES_rack"]:checked').val();
    let qualidade_rack = $('input[name="REDES_qualidade_rack"]:checked').val();
    
    let qualidade_infraestrutura = $('input[name="REDES_qualidade_infra"]:checked').val();

    let detalhesRedes = $('#detalhes_REDES').val()

    let projetos = carregarProjetosREDES()
    
    return `Prestadora atual: ${prestadora_atual} e está há ${prestadora_atual_tempo} prestando serviços lá.\n
        Situação hoje:
            ${quantidade_pontos} pontos
            Sinal ${sinal_redes}
            Tem rack?  ${tem_rack} (qualidade de organização do rack ${qualidade_rack})
            Qualidade da infraestrutura: ${qualidade_infraestrutura}
        \n
        Projetos a fazer:
            ${projetos.join()}
        \n
        Detalhes: ${detalhesRedes}`
}

const carregarProjetosREDES = () => {
    let desc_projetos = []

    let projetos = $('.projeto_REDES')

    const tratamento = html =>  html.replaceAll('Projeto', '').replaceAll('<div class="card-body">', '').replaceAll('<h5 class="card-title">', '').replaceAll('</h5>', '').replaceAll('<p class="card-text">', '').replaceAll('\n', '').replaceAll('  ', '').replaceAll('</p>', '\n').replaceAll('</div>', '\n')
    
    projetos.each(function(index) {
        desc_projetos.push(`Projeto ${index + 1}: \n` + tratamento($(this).html()))
    })

    return desc_projetos
}
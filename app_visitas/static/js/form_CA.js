const informacoesCA = () => {
    let prestadora_atual = $('#prestadora_CA').val()
    let prestadora_atual_tempo = $('#prestadora_CA_tempo').val()

    let quantidade_entrada_veiculos = $('#quant_entradas_vei').val()
    let equipamento_entrada_veiculos = $('input[name="acesso_veiculos"]:checked').val();

    let quantidade_saida_veiculos = $('#quant_saidas_vei').val()
    let equipamento_saida_veiculos = $('input[name="saida_veiculos"]:checked').val();

    let quantidade_entrada_pedestres = $('#quant_entradas_ped').val()
    let equipamento_entrada_pedestres = $('input[name="acesso_pedestres"]:checked').val();

    let quantidade_saida_pedestres = $('#quant_saidas_ped').val()
    let equipamento_saida_pedestres = $('input[name="saida_pedestres"]:checked').val();

    let detalhesCA = $('#detalhes_CA').val()

    console.log(prestadora_atual, prestadora_atual_tempo, quantidade_entrada_veiculos, equipamento_entrada_veiculos, quantidade_saida_veiculos, equipamento_saida_veiculos)
    console.log(quantidade_entrada_pedestres, equipamento_entrada_pedestres, quantidade_saida_pedestres, equipamento_saida_pedestres)

    let projetos = carregarProjetos()

    criandoOrcamento(quantidade_entrada_veiculos, equipamento_entrada_veiculos, quantidade_entrada_pedestres, equipamento_entrada_pedestres)
    
    return `Prestadora atual: ${prestadora_atual} e está há ${prestadora_atual_tempo} anos lá.\n
        Tem hoje:
            ${quantidade_entrada_veiculos} entradas de veículos com ${equipamento_entrada_veiculos}
            ${quantidade_saida_veiculos} saídas de veículos com ${equipamento_saida_veiculos}
            ${quantidade_entrada_pedestres} entradas de pedestres com ${equipamento_entrada_pedestres}
            ${quantidade_saida_pedestres} saídas de pedestres com ${equipamento_saida_pedestres}
        \n
        Projetos a fazer:
            ${projetos.join()}
        \n
        Detalhes: ${detalhesCA}`
}

const carregarProjetos = () => {
    let desc_projetos = []

    let projetos = $('.projeto_CA')

    const tratamento = html =>  html.replaceAll('Projeto', '').replaceAll('<div class="card-body">', '').replaceAll('<h5 class="card-title">', '').replaceAll('</h5>', '').replaceAll('<p class="card-text">', '').replaceAll('\n', '').replaceAll('</p>', '\n').replaceAll('</div>', '\n').replaceAll('  ', '')
    
    projetos.each(function(index) {
        desc_projetos.push(`Projeto ${index + 1}: \n` + tratamento($(this).html()))
    })

    return desc_projetos
}

const criandoOrcamento = (quantidade_entrada_veiculos, equipamento_entrada_veiculos, quantidade_entrada_pedestres, equipamento_entrada_pedestres) => {
    let card = $('#cards').find(":selected").attr('value')

    if(quantidade_entrada_veiculos == 1 && equipamento_entrada_veiculos == 'LPR' && quantidade_entrada_pedestres == 1 && equipamento_entrada_pedestres == "Facial") {
        fetch(`https://ecomp-forge.netlify.app/espelhamento?card=${card}&id=423`)
    } else if((quantidade_entrada_veiculos == 2 && equipamento_entrada_veiculos == 'LPR' && quantidade_entrada_pedestres == 2 && equipamento_entrada_pedestres == "Facial")) {
        fetch(`https://ecomp-forge.netlify.app/espelhamento?card=${card}&id=425`)
    }
}
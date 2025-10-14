$(".toggle-header").on('click', function(e) {
    let id = $(this).attr('target')
    $(`.toggle-content[id=${id}]`).toggle(700)
    $(this).find('.icone-seta').toggleClass('icone-seta-cima')
})
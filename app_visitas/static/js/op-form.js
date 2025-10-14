$('.op-form').on('click', function(event) {
    let id = $(this).attr('target')

    $(`#panel-${id}`).toggle(700)

    $(this).toggleClass('op-form-active')
})
$('#checkbox-1').click(function () {
    $('#checkbox-2').prop('checked', false)
    $('#checkbox-3').prop('checked', false)
    $('#checkbox-4').prop('checked', false)
    if($('#checkbox-1').hasAttribute('checked')){
        $(this).prop('checked', false)
    } else  $(this).prop('checked', true)
})
$('#checkbox-2').click(function () {

    $('#checkbox-1').prop('checked', false)
    $('#checkbox-3').prop('checked', false)
    $('#checkbox-4').prop('checked', false)
    if($('#checkbox-2').hasAttribute('checked')){
        $(this).prop('checked', false)
    } else  $(this).prop('checked', true)
})
$('#checkbox-3').click(function () {

    $('#checkbox-1').prop('checked', false)
    $('#checkbox-2').prop('checked', false)
    $('#checkbox-4').prop('checked', false)
    if($('#checkbox-3').hasAttribute('checked')){
        $(this).prop('checked', false)
    } else  $(this).prop('checked', true)
})
$('#checkbox-4').click(function () {

    $('#checkbox-1').prop('checked', false)
    $('#checkbox-2').prop('checked', false)
    $('#checkbox-3').prop('checked', false)
    if($('#checkbox-4').hasAttribute('checked')){
     $('#checkbox-4').prop('checked', false)
    } else  $(this).prop('checked', true)
})

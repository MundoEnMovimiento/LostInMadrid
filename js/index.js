$('#appointment_selector').hide();

//Muestra los tipos de poder adquisitivo si se indica que hay distinción
$('input:radio[name=appointment]').change(function() {
    if ($('#appointment_yes').is(":checked")) {
        $('#appointment_selector').show();
    } else {
        $('#appointment_selector').hide();
    }
});

//Muestra textbox para indicar otro tipo de campo que no aparezca


//Help para required en safari
// $("form").submit(function(e) {
//
//     var ref = $(this).find("[required]");
//
//     $(ref).each(function() {
//         if ($(this).val() === '') {
//             alert("Hay campos obligatorios (*) que no han sido rellenados");
//
//             $(this).focus();
//
//             e.preventDefault();
//             return false;
//         }
//     });
//     return true;
// });
function printDiv(nombreDiv) {
    var contenido = document.getElementById(nombreDiv).innerHTML;
    var contenidoOriginal= document.body.innerHTML;
    document.body.innerHTML = contenido;
    window.print();
    document.body.innerHTML = contenidoOriginal;
}

// Agregar la función letterswithbasicpunc a la librería de validación de jQuery
$.validator.addMethod("letterswithbasicpunc", function (value, element) {
    return this.optional(element) || /^[a-z\s.,;:'"-]+$/i.test(value);
}, "Please enter only letters, spaces, and basic punctuation.");

// Configuración de validación del formulario
$.validator.setDefaults({
    submitHandler: function () {
        alert("Su Solicitud de Contacto Ha Sido Enviada con Éxito");
    }
});

$(document).ready(function () {
    $("#signupForm").validate({
        rules: {
            nombre: {
                required: true,
                letterswithbasicpunc: true
            },
            apellido: {
                required: true,
                letterswithbasicpunc: true
            },
            telefono: {
                required: true,
                minlength: 10,
                digits: true
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        messages: {
            nombre: {
                required: "Por favor ingrese su nombre",
                letterswithbasicpunc: "Por favor ingrese solo letras, espacios y signos de puntuación básicos"
            },
            apellido: {
                required: "Por favor ingrese su apellido",
                letterswithbasicpunc: "Por favor ingrese solo letras, espacios y signos de puntuación básicos"
            },
            telefono: {
                required: "Por favor ingrese su número de teléfono",
                minlength: "Su número de teléfono debe tener al menos 10 dígitos",
                digits: "Solo se admiten números"
            },
            email: "Por favor ingrese un correo electrónico válido en el formato usuario@dominio.com",
            agree: "Por favor acepte nuestra política"
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Agregar la clase 'invalid-feedback' al elemento de error
            error.addClass("invalid-feedback");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });
});
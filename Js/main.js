$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<span class="title">#title#</span>',
        labels: {
            previous : 'Anterior',
            next : 'Siguiente',
            finish : 'Solicitar Contacto', 
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            var fullname = $('#first_name').val() + ' ' + $('#last_name').val();
            var phone = $('#phone').val();
            var email = $('#email').val();
            var location = $('#location').val();
            
            var time = $('#time').val();

            $('#fullname-val').text(fullname);
            $('#phone-val').text(phone);
            $('#email-val').text(email);
            $('#location-val').text(location);
            
            $('#time-val').text(time);

            return true;
        }
    });
    



});

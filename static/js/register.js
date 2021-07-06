function addLoader() {
    $('body').addClass("loaded")
    setTimeout(function() {
        $('#loader').fadeOut()
        document.getElementById('loader-wrapper').style.display = "none";
    }, 1500)
}

$(window).on('load', function() {
    $('.registerform').click()
        // setTimeout(function() {
        //     addLoader()
        // }, 1000);
});


$('#save').on('click', () => {
    let name = $('#name')[0].value
    let email = $('#email')[0].value
    let password1 = $('#password1')[0].value
    let password2 = $('#password2')[0].value
    let profile = $('#profile')[0].value
    let address = $('#address')[0].value
    let phone = $('#number')[0].value
    let csrf = $('input[name=csrfmiddlewaretoken]')[0].value
    if (password1 == password2) {
        $.ajax({
            url: '/',
            method: 'POST',
            data: {
                "name": name,
                "email": email,
                "password": password1,
                "address": address,
                "phone": phone,
                "profile": profile,
                csrfmiddlewaretoken: csrf
            },
            success: function(response) {
                window.location.href = "/welcome";
            }
        })
    } else {
        swal({
            title: "Password Not Matched!",
            text: "Please Check the password and try again!",
            icon: "info",
            button: "Ok",
            timer: 2000
        });
    }
})
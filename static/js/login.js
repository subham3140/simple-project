$('.loginform').click()

$('#login').on('click', () => {
    let name = $('#name')[0].value
    let email = $('#email')[0].value
    let password = $('#password')[0].value
    $.ajax({
        url: '/loginform',
        method: 'GET',
        data: {
            "name": name,
            "email": email,
            "password": password
        },
        success: function(response) {
            if (response.data == "false") {
                swal({
                    title: "User Not Exists!",
                    text: "Register First",
                    icon: "error",
                    buttons: {
                        cancel: {
                            text: "Cancel",
                            value: "cancel",
                            className: "",
                            closeModal: true,
                            visible: true,

                        },
                        confirm: {
                            text: "OK",
                            value: "register",
                            visible: true,
                            className: "",
                            closeModal: true
                        }
                    }
                }).then((response) => {
                    if (response == "register") {
                        window.location.href = "/";
                    } else {
                        location.reload()
                    }
                });
            } else {
                window.location.href = "/welcome";
            }
        }
    })
})
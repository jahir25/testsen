function onSendMessage(params) {
    try {
        var toEmail = "jahirdiaz2595@gmail.com"
        var apiKey = "re_YC7uzr8u_42vsV42fnp42pG354mAfmjPT"
        var subject = "Asunto de correo"
        var message = "message"

        $.ajax({
            url: "https://api.resend.com/emails",
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                from: "Acme <onboarding@resend.dev>",
                to: [toEmail],
                subject: subject,
                html: `<p>${message}</p>`
            }),
            success: function (response) {
                console.log(response)
            },
            error: function (err) {
                console.log(err)
            }
        });
    } catch (error) {
        console.log(error)
    }
}
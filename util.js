function onSendMessage(event) {

     // Prevenir la recarga de la página
    if (event) {
        event.preventDefault();
    }

    try {
        var apiKey = "apis-token-12634.03iGS6sXJYDMiaklQ9DL2sJ8rTU0Ug7i"
    
        const myHeaders = new Headers();
        myHeaders.append("Authorization", apiKey);

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };

        fetch("https://api.apis.net.pe/v2/reniec/dni?numero=46027897", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));



    } catch (error) {
        console.log(error)
        alert("codigo erroneo")
    }
}
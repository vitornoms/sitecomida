let vutton = document.getElementById("handleSubmit");

GamepadButton.onclick = async function() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let data = {title,description}

    const response = await fetch('http://localhost:3003/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json:charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.sucess) {
        alert("Sucesso")
    } else {
        alert('Não');
    }
}
function ir(event){
    var input = document.getElementById("inputId");
    var inputId = input.value.trim();

    if (inputId === "" || inputId.length > 8) {
        event.preventDefault(); 
        alert("Por favor, insira um ID válido com no máximo 8 caracteres!");
        input.classList.add("erro");
    } else {
        input.classList.remove("erro"); 
    }
}


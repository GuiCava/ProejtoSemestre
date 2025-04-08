function ir(event){
    var input = document.getElementById("inputId");
    var inputId = input.value.trim();
  
    if (inputId === "") {
        event.preventDefault(); 
        alert("Por favor, insira um ID válido!");
        input.classList.add("erro");
    } else {
        input.classList.remove("erro"); 
    }
  }
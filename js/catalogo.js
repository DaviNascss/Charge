let carro = document.getElementById("carro_escolhido");
let tabela = document.getElementById("container_catalogo");
let titulo = document.getElementById("catalogo");
let compra = document.getElementById("compra");
let fundocompra = document.getElementById("fundo-compra");

let nome =document.getElementById("nome");
let email =document.getElementById("email");

function abrir(){
    carro.classList.toggle("esconder")
    tabela.classList.toggle("esconder")
    titulo.classList.toggle("esconder")
}

function fechar(){
    carro.classList.toggle("esconder")
    tabela.classList.toggle("esconder")
    titulo.classList.toggle("esconder")
}

function reserva(){
    fundocompra.classList.toggle("hide");
    compra.classList.toggle("hide");
}

function esconder(){
    fundocompra.classList.toggle("hide");
    compra.classList.toggle("hide");
}

function enviar(){
    alert("Email enviado com sucesso!")
    nome.value = "";
    email.value = "";
}
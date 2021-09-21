let nome = window.document.getElementById("nome")
let email = window.document.querySelector("#email")
let assunto = window.document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let map = document.querySelector("#map")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txt = window.document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red"
    }else{
        txt.innerHTML = "Nome Válido"
        txt.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = window.document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}


function validaAssunto() {
    let txtAssunto = window.document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente antes de enviar.")
    }
}

function mapaZoom() {
    map.style.width = "800px"
    map.style.height = "600px"
}

function mapaNormal(){
    map.style.width = "400px"
    map.style.height = "250px"
}
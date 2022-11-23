let nome = window.document.getElementById('nome')

    let email = document.querySelector('#email')

    let assunto = document.querySelector('#assunto')

    let nomeOk = false
    let emailOk = false
    let assuntoOK = false
    

    nome.style.width = '100%'
    
    email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')       
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome é Inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome é Válido'
        txtNome.style.color = 'green'
        nomeOk = true
        
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário foi enviado com sucesso")
    }else{
        alert("Preencha o formulário corretamente antes de enviar!")
    }
}
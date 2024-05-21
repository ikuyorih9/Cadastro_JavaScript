//VARIÁVEIS DE INPUTS.
let inputNomeUsuario = document.getElementById('inputNomeUsuario');
let inputAnoNascimento = document.getElementById('inputAnoNascimento');
let inputEmail = document.getElementById('inputEmail');
let inputSenha = document.getElementById('inputSenha');

//VARIÁVEIS DE TEXTOS.
let textoNomeUsuario = document.getElementById('textoNomeUsuario');
let textoAnoNascimento = document.getElementById('textoAnoNascimento');
let textoEmail = document.getElementById('textoEmail');
let textoSenha = document.getElementById('textoSenha');
let textoSenhaForca = document.getElementById('textoForcaSenha');

//VARIÁVEIS DE BOTÃO
let buttonEnviar = document.getElementById('buttonEnviar');

//VARIÁVEL DO <meter>
let indicadorSenha = document.getElementById('indicadorForca');

//BOOLEANOS DE VALIDADE DO USUÀRIO.
let nomeValido;
let anoValido;
let emailValido;
let senhaValida;

function verificaNomeValido(nomeInput){
    let nome = nomeInput.target.value;

    if(nome.length <= 6){
        textoNomeUsuario.textContent = "Nome de usuário deve haver mais de 6 letras.";
        nomeValido = false;
        return;
    }

    const regexNome = /^[A-Za-z]+$/;

    if(!regexNome.test(nome)){
        textoNomeUsuario.textContent = "Insira um nome de usuário válido.";
        nomeValido = false;
        return;
    }
    else{
        textoNomeUsuario.textContent = "";
    }
    nomeValido = true;
}

function verificaAnoValido(inputAno){
    let ano = inputAno.target.value;

    console.log(ano);
    if(ano >= 1900 && ano <=2024){
        textoAnoNascimento.textContent="";
        anoValido = true;
        return;
    }
    textoAnoNascimento.textContent = "O ano de nascimento deve estar entre 1900 e 2024.";
    anoValido = false;
    return;
}

function verificaEmailValido(inputTextoEmail){
    let email = inputTextoEmail.target.value;

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|com\.br|org|net)$/;
    if(!regexEmail.test(email)){
        textoEmail.textContent = "Formato de email não é válido.";
        emailValido = false;
        return;
    }
    textoEmail.textContent = "";
    emailValido = true;
}

function verificaSenhaValida(inputTextoSenha){
    let senha = inputTextoSenha.target.value;
    
    //Regexs
    const regexCaractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;
    const regexNumero = /[0-9]/g;
    const regexLetraMaiuscula = /[A-Z]/g;
    const regexLetraMinuscula = /[a-z]/g;
    
    //Verifica se a senha tem o tamanho correto.
    let temTamanhoCorreto = senha.length >= 6 && senha.length <= 20;
    //Obtém o número de caracteres especiais na senha.
    let qtdCaracteresEspeciais = (senha.match(regexCaractereEspecial)||[]).length;
    //Obtem o número de números na senha.
    let qtdNumeros = (senha.match(regexNumero)||[]).length;
    //Obtem a quantidade de letras maiúsculas na senha.
    let qtdLetrasMaiusculas = (senha.match(regexLetraMaiuscula)||[]).length;
    //Obtem a quantidade de letras minúsculas na senha.
    let qtdLetrasMinusculas = (senha.match(regexLetraMinuscula)||[]).length;
    //Booleano para verificar se há o nome de usuário na senha.
    let temNomeUsuario = inputNomeUsuario.value.length !== 0 && senha.includes(inputNomeUsuario.value);
    //Booleano para verificar se há a data de nascimento na senha.
    let temAnoNascimento = inputAnoNascimento.value.length !== 0 && senha.includes(inputAnoNascimento.value);
    
    //Verifica se a senha não tem o tamanho correto.
    if(!temTamanhoCorreto){
        textoSenha.textContent = "Senha deve ter entre 6 e 20 caracteres.";
        indicadorSenha.value = 0;
        textoSenhaForca.textContent = "Senha invalida!"
        textoSenhaForca.style.color = "gray";
        senhaValida = false;
        return;
    }
    //Verifica se a senha não tem ao menos um caracter especial
    else if(qtdCaracteresEspeciais === 0){
        textoSenha.textContent = "Senha deve ter ao menos um caractere especial.";
        indicadorSenha.value = 0;
        textoSenhaForca.textContent = "Senha invalida!"
        textoSenhaForca.style.color = "gray";
        senhaValida = false;
        return;
    }
    //Verifica se a senha não tem ao menos um número.
    else if(qtdNumeros === 0){
        textoSenha.textContent = "Senha deve ter ao menos um número.";
        indicadorSenha.value = 0;
        textoSenhaForca.textContent = "Senha invalida!"
        textoSenhaForca.style.color = "gray";
        senhaValida = false;
        return;
    }
    //Verifica se a senha não tem ao menos uma letra maiúscula.
    else if(qtdLetrasMaiusculas === 0){
        textoSenha.textContent = "Senha deve ter ao menos uma letra maiúscula.";
        indicadorSenha.value = 0;
        textoSenhaForca.textContent = "Senha invalida!"
        textoSenhaForca.style.color = "gray";
        senhaValida = false;
        return;
    }
    //Verifica se a senha não tem ao menos uma letra minúscula.
    else if(qtdLetrasMinusculas === 0){
        textoSenha.textContent = "Senha deve ter ao menos uma letra minúscula.";
        indicadorSenha.value = 0;
        textoSenhaForca.textContent = "Senha invalida!"
        textoSenhaForca.style.color = "gray";
        senhaValida = false;
        return;
    }
    //Verifica se a senha inclui o nome de usuário.
    else if(temNomeUsuario){
        textoSenha.textContent = "Senha não pode incluir seu nome de usuário.";
        indicadorSenha.value = 0;
        textoSenhaForca.textContent = "Senha invalida!"
        textoSenhaForca.style.color = "gray";
        senhaValida = false;
        return;
    }
    //Verifica se a senha inclui o ano de nascimento.
    else if(temAnoNascimento){
        textoSenha.textContent = "Senha não pode incluir o ano de nascimento.";
        indicadorSenha.value = 0;
        textoSenhaForca.textContent = "Senha invalida!"
        textoSenhaForca.style.color = "gray";
        senhaValida = false;
        return;
    }

    textoSenha.textContent = "";

    //Verifica se a senha é fraca.
    if(senha.length <= 8 && qtdCaracteresEspeciais > 0 && qtdNumeros > 0){
        indicadorSenha.value = 33;
        textoSenhaForca.textContent = "Senha fraca!"
        textoSenhaForca.style.color = "red";
    }
    //Verifica se a senha é moderada.
    else if(senha.length <= 12 && qtdCaracteresEspeciais > 0 && qtdNumeros > 0 && qtdLetrasMaiusculas > 0){
        indicadorSenha.value = 66;
        textoSenhaForca.textContent = "Senha moderada!"
        textoSenhaForca.style.color = "orange";
    }
    //Verifica se a senha é forte.
    else if(senha.length > 12 && qtdCaracteresEspeciais > 1 && qtdNumeros > 1 && qtdLetrasMaiusculas > 1){
        indicadorSenha.value = 100;
        textoSenhaForca.textContent = "Senha forte!"
        textoSenhaForca.style.color = "green";
    }
    senhaValida = true;
}

buttonEnviar.addEventListener('click', function(){
    if(inputNomeUsuario.value.length === 0){
        window.alert("Insira um nome de usuário!");
    }
    else if(inputAnoNascimento.value.length === 0){
        window.alert("Insira seu ano de nascimento!");
    }
    else if(inputEmail.value.length === 0){
        window.alert("Insira um endereço de email!");
    }
    else if(inputEmail.value.length === 0){
        window.alert("Insira uma senha!");
    }

    if(nomeValido && anoValido && emailValido && senhaValida){
        window.alert("Você foi cadastrado!");
        inputNomeUsuario.value = "";
        inputAnoNascimento.value = "";
        inputEmail.value = "";
        inputSenha.value = "";
        textoSenhaForca = "";
        indicadorSenha.value = 0;
    }
});

inputNomeUsuario.addEventListener('focusout', verificaNomeValido);
inputAnoNascimento.addEventListener('focusout', verificaAnoValido);
inputEmail.addEventListener('focusout', verificaEmailValido);
inputSenha.addEventListener('focusout', verificaSenhaValida);
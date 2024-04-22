//VARIÁVEIS DE INPUTS.
let inputNomeCompleto = document.getElementById('inputNomeCompleto');
let inputAnoNascimento = document.getElementById('inputAnoNascimento');
let inputEmail = document.getElementById('inputEmail');
let inputSenha = document.getElementById('inputSenha');

//VARIÁVEIS DE TEXTOS.
let textoNomeCompleto = document.getElementById('textoNomeCompleto');
let textoAnoNascimento = document.getElementById('textoAnoNascimento');
let textoEmail = document.getElementById('textoEmail');
let textoSenha = document.getElementById('textoSenha');

//VARIÁVEIS DE BOTÃO
let buttonEnviar = document.getElementById('buttonEnviar');

function verificaNomeValido(nome){

}

function verificaAnoValido(ano){
    if(ano >= 1900 && ano <=2022){
        
        return true;
    }
    return false;
}

buttonEnviar.addEventListener('click', function(){
    console.log(inputNomeCompleto.value);
    console.log(verificaAnoValido(inputAnoNascimento.value));
    console.log(inputEmail.value);
    console.log(inputSenha.value);
});

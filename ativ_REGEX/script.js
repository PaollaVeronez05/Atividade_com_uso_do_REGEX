function validar (){
    const input =  document.getElementById("numero");
    const  mensagem = document.getElementById("mensagem");

    const regex = /^\d+(\.\d+)?$/;
    const valor = input.value;

    if(regex.test(valor)){
        input.classList.remove("invalido");
        input.classList.add("valido");
        mensagem.textContent = "Valor válido";
        mensagem.className = "mensagem valido-texto";

    }else{
        input.classList.remove("valido");
        input.classList.add("invalido");
        mensagem.textContent = "Valor inválido! Digite um número válido";
        mensagem.className = "mensagem invalido-texto";

    }

}
//DE U  NOME AO OBJETO
let  = {
    numeroAlvo: Math.floor(Math.random() * /*Apague o Substitua pelo numero maximo que pode ocorrer*/ ) + 1,
    tentativasRestantes: /*Substitua pelo numero de tentivas*/
};

/*DE UM NOME A FUNÇÃO*/
function () {
    //Pegue o input
    let entradaPalpite;
    //Pegue a mensagem
    let mensagem;

    if (obj.tentativasRestantes > 0) {
        //VERIFIQUE SE O PALPITE E U NUMERO INTEIRO EXEMPLO 1,2,3,4...
        let palpite;

        //VERFICA SE PALPITE E O NUMERO ALVO SÃO IGUAIS
        if () {
            mensagem.textContent = /*EXIBA UMA MESSAGEM DE VITORIA*/;
            obj.tentativasRestantes = 0;
        } else if (palpite < obj.numeroAlvo) {
            /*SE PLAPITE FOR MENOR*/
            mensagem.textContent = /*EXIBA UMA MESSAGEM*/;
        } else {
            /*SE PLAPITE FOR MAIOR*/
            mensagem.textContent = /*EXIBA UMA MESSAGEM*/;
        }

        /*DIMINUA O TANTO DE TENTATIVA*/

        //Variavel.tentativasRestantes--


        /*VERIFICA SE O NUMERO DE TENTATIVAS E INDETICO A 0 E PALPITE E DIFERENTE DE NUMERO ALVO*/
        if () {
            mensagem.textContent = `Você esgotou suas tentativas! O número correto era ${obj.numeroAlvo}. Tente novamente!`;
        }
    } else {
        mensagem.textContent = /*MESSAGEM DE DERROTAS APOS PERDE TODAS AS TENATIVAS */;
    }

    entradaPalpite.value = '';
}

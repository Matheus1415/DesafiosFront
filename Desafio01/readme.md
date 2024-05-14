## Instruções do Jogo de Adivinhação:
Objetivo do Jogo:
Tente adivinhar o número secreto gerado pelo jogo. O número está entre 1 e 100.

## Como Jogar:
- O jogo gera aleatoriamente um número entre 1 e 100 e o armazena como o número alvo.
- Você tem um total de 5 tentativas para adivinhar o número correto.
- Insira seu palpite na caixa de entrada fornecida.
- Clique no botão "Enviar Palpite" para registrar seu palpite.
- O jogo fornecerá feedback se o seu palpite é muito alto, muito baixo ou correto.
Continue a adivinhar até que você acerte o número ou esgote todas as suas tentativas.

## Feedback do Jogo:
- Se o seu palpite for menor do que o número alvo, o jogo dirá "Tente um número maior!".
- Se o seu palpite for maior do que o número alvo, o jogo dirá "Tente um número menor!".
- Se você adivinhar corretamente, o jogo dirá "Parabéns! Você adivinhou corretamente o número [número correto]!".
- Se você esgotar todas as suas tentativas sem adivinhar o número correto, o jogo dirá "Você esgotou suas tentativas! O número correto era [número correto]. Tente novamente!".

## Dicas:
- Tente usar uma estratégia inteligente para reduzir suas opções a cada palpite.
- Preste atenção aos feedbacks fornecidos pelo jogo para ajustar seus palpites.
- Divirta-se e boa sorte!



----------------------------REPOSTA SO PODE SER USADA EM ULTIMO CASO---------------------------------------------------

```javascript
let obj = {
    numeroAlvo: Math.floor(Math.random() * 10) + 1,
    tentativasRestantes: 5
};

function palpitar() {
    let entradaPalpite = document.getElementById('guessInput');
    let mensagem = document.getElementById('message');

    if (obj.tentativasRestantes > 0) {
        let palpite = parseInt(entradaPalpite.value);

        if (palpite === obj.numeroAlvo) {
            mensagem.textContent = `Parabéns! Você adivinhou corretamente o número ${obj.numeroAlvo}!`;
            obj.tentativasRestantes = 0;
        } else if (palpite < obj.numeroAlvo) {
            mensagem.textContent = 'Tente um número maior!';
        } else {
            mensagem.textContent = 'Tente um número menor!';
        }

        obj.tentativasRestantes--;

        if (obj.tentativasRestantes === 0 && palpite !== obj.numeroAlvo) {
            mensagem.textContent = `Você esgotou suas tentativas! O número correto era ${obj.numeroAlvo}. Tente novamente!`;
        }
    } else {
        mensagem.textContent = 'Você já esgotou todas as tentativas!';
    }

    entradaPalpite.value = '';
}
```


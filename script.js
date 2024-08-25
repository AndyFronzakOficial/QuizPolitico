document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const scores = {
        extremaEsquerda: 0,
        esquerda: 0,
        centro: 0,
        direita: 0,
        extremaDireita: 0
    };

    for (let i = 1; i <= 25; i++) {
        const answer = parseInt(document.getElementById('q' + i).value);
        if (answer === 1) {
            scores.extremaEsquerda++;
        } else if (answer === 2) {
            scores.esquerda++;
        } else if (answer === 3) {
            scores.centro++;
        } else if (answer === 4) {
            scores.direita++;
        } else if (answer === 5) {
            scores.extremaDireita++;
        }
    }

    const maxScore = Math.max(scores.extremaEsquerda, scores.esquerda, scores.centro, scores.direita, scores.extremaDireita);

    let result = '';
    let description = '';
    let politician = '';

    if (scores.extremaEsquerda === maxScore) {
        result = 'Extrema Esquerda';
        description = 'Você está mais alinhado com a Extrema Esquerda, que defende mudanças radicais e uma intervenção estatal intensa para promover igualdade social e econômica.';
        politician = 'Manuela d\'Ávila';
    } else if (scores.esquerda === maxScore) {
        result = 'Esquerda';
        description = 'Você está mais alinhado com a Esquerda, que defende uma intervenção do Estado para promover justiça social e maior igualdade econômica, mas de uma forma mais moderada do que a Extrema Esquerda.';
        politician = 'Tabata Amaral';
    } else if (scores.centro === maxScore) {
        result = 'Centro';
        description = 'Você está mais alinhado com o Centro, que busca equilibrar as políticas econômicas e sociais, aceitando uma combinação de intervenções do Estado e livre mercado.';
        politician = 'Kim Kataguiri';
    } else if (scores.direita === maxScore) {
        result = 'Direita';
        description = 'Você está mais alinhado com a Direita, que defende menor intervenção do Estado na economia, priorizando o livre mercado e a redução da regulação estatal.';
        politician = 'Guilherme Boulos';
    } else if (scores.extremaDireita === maxScore) {
        result = 'Extrema Direita';
        description = 'Você está mais alinhado com a Extrema Direita, que advoga por uma forte redução do papel do Estado na economia e políticas mais conservadoras em questões sociais.';
        politician = 'Jair Bolsonaro';
    }

    document.getElementById('description').innerText = description;
    document.getElementById('politician').innerText = politician;
    document.getElementById('result').style.display = 'block';
});

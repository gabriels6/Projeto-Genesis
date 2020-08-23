let order = []; //Ordens do jogo, aleatoriamente
let clickedOrder = []; //Ordem dos clicks;
let score = 0;

//0 = verde;
//1 = vermelho;
//2 = amarelo;
//3 = azul;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatório de cores
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);

    order[order.length] = colorOrder;

    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};


//Acende a próxima cor
// element = elemento das cores; number = tempo
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');

    }, number - 250); //Executa um código dentro do tempo
    setTimeout(() =>{
        element.classList.remove('selected');
    });
}

//Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () =>{ // Verifica a ordem dos arrays
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break; // Para a função
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score} \n Você acertou! Inicialndo próximo nível`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    
}


//função que retorna a cor
let createColorElement = (color) =>{
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }   
}

//função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over
let gameOver = () =>{
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em ok para inicial um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//função de início do jogo
let playGame = () =>{
    alert('Bem Vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;
    order = [];
    clickedOrder = [];

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//início do jogo
playGame();
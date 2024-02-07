// # MENU SCREEN

const menuChoices = document.getElementById("menu-choices");
const navigation_ul = document.getElementById("navigation-ul");
const menuChoice_3R = document.getElementById("menuChoice_3R");
const menuChoice_5R = document.getElementById("menuChoice_5R");
const menuChoice_FM = document.getElementById("menuChoice_FM");
const mainScreenGame = document.getElementById("border-screen");
const endScreen = document.getElementById("end-screen");
const endGameDiv = document.getElementById("end-screen-div");

function menuChoice_3R_Function() {
    menuChoices.style.display = "none";
    mainScreenGame.style.display = "flex";
    navigation_ul.style.display = "flex";
    endGameValue = 3;
}

function menuChoice_5R_Function() {
    menuChoices.style.display = "none";
    mainScreenGame.style.display = "flex";
    navigation_ul.style.display = "flex";
    endGameValue = 5;
}

function menuChoice_FM_Function() {
    menuChoices.style.display = "none";
    mainScreenGame.style.display = "flex";
    navigation_ul.style.display = "flex";
}

function endGame_Function() {
    menuChoices.style.display = "none";
    mainScreenGame.style.display = "none";
    navigation_ul.style.display = "none";
    endScreen.style.display = "flex";
}

function returnMenu() {
    menuChoices.style.display = "flex";
    mainScreenGame.style.display = "none";
    navigation_ul.style.display = "none";
    endScreen.style.display = "none";
}

//______________________________________________________________

// # MAIN GAME
const imgTagPlayer = document.getElementById("imgPlayer");
const imgTagCPU = document.getElementById("imgCPU");
const iconNavPedra = document.getElementById('pedra');
const iconNavPapel = document.getElementById('papel');
const iconNavTesoura = document.getElementById('tesoura');

const score = {
    player: 0,
    cpu: 0
}

const tagchoice = {
    pedra: "media/pedra_player.png",
    papel: "media/papel_player.png",
    tesoura: "media/tesoura_player.png",
}

const domElements = {
    player: imgTagPlayer,
    cpu: imgTagCPU,
}

function junKenPo(id) {
    domElements[id].classList.add(`jokenpo-move-${id}`);
}



function changeImgPlayer(choice, id) {
    domElements[id].src = tagchoice[choice]
    domElements[id].alt = "Jogada do Player"
}

function handlePlay(choice, id) {
    id === "player" && handlePlay(cpuTurn(), "cpu")
    domElements[id].setAttribute("data-choice", choice)
    junKenPo(id)
    changeImgPlayer("pedra", id)
    setTimeout(() => {
        domElements[id].classList.remove(`jokenpo-move-${id}`)
        changeImgPlayer(choice, id)
        id === "cpu" && setScore()
    }, 2000)
}

//#PEDRA __________________________________________________

iconNavPedra.onclick = () => {
    handlePlay("pedra", "player")
}

//#PAPEL __________________________________________________

iconNavPapel.onclick = () => {
    handlePlay("papel", "player")
}

//#TESOURA __________________________________________________

iconNavTesoura.onclick = () => {
    handlePlay("tesoura", "player")
}

function cpuTurn() {
    const pcOpt = ['pedra', 'papel', 'tesoura'];
    const pcJogada = Math.floor(Math.random() * 3)
    return pcOpt[pcJogada]
}

let playerScore = document.getElementById("player-score");
let cpuScore = document.getElementById("cpu-score");

function setScore() {
    const playerChoice = domElements.player.dataset.choice
    const cpuChoice = domElements.cpu.dataset.choice
    switch (playerChoice){
        case "pedra":
            cpuChoice === "papel" && score.cpu++
            cpuChoice === "tesoura" && score.player++
            break
        case "papel":
            cpuChoice === "pedra" && score.player++
            cpuChoice === "tesoura" && score.cpu++
            break
        case "tesoura":
            cpuChoice === "pedra" && score.cpu++
            cpuChoice === "papel" && score.player++
            break
    }
    console.table(score)
    playerScore.innerText = `(${score.player})`;
    cpuScore.innerText = `(${score.cpu})`;

    console.log(score.player)
    console.log(score.cpu)

    switch (endGameValue) {
        case 3:
            if (score.player === 3 || score.cpu === 3) {
                score.player = 0;
                score.cpu = 0;
                playerScore.innerText = `(${score.player})`;
                cpuScore.innerText = `(${score.cpu})`;
                endGame_Function()
                if (score.player <= score.cpu) {
                    endGameDiv.style.backgroundImage = "url('../media/you_lose_bg.png')"
                } else {
                    endGameDiv.style.backgroundImage = "url('../media/win_bg.jpg')"
                }
            }
            break
        case 5:
            if (score.player === 5 || score.cpu === 5) {
                score.player = 0;
                score.cpu = 0;
                playerScore.innerText = `(${score.player})`;
                cpuScore.innerText = `(${score.cpu})`;
                endGame_Function()
                if (score.player <= score.cpu) {
                    endGameDiv.style.backgroundImage = "url('../media/you_lose_bg.png')"
                } else {
                    endGameDiv.style.backgroundImage = "url('../media/win_bg.jpg')"
                }
            }
            break
        default:
            return
    }
}
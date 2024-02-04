//VERIFICAR REMOÇÂO DA DIV
const imgTagPlayer = document.getElementById("imgPlayer");
const imgTagCPU = document.getElementById("imgCPU");
const screenMatch = document.getElementById("screen-match");
const iconNavPedra = document.getElementById('pedra');
const iconNavPapel = document.getElementById('papel');
const iconNavTesoura = document.getElementById('tesoura');

function junKenPo(id) {
    domElements[id].classList.add(`jokenpo-move-${id}`);
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

function changeImgPlayer(choice, id) {
    domElements[id].src = tagchoice[choice]
    domElements[id].alt = "Jogada do Player"
}

function handlePlay(choice, id) {
    id === "player" && handlePlay(cpuTurn(), "cpu")
    junKenPo(id)
    changeImgPlayer("pedra", id)
    setTimeout(() => {
        domElements[id].classList.remove(`jokenpo-move-${id}`)
        domElements[id].setAttribute("data-choice", choice)
        id === "cpu" && setScore()
        changeImgPlayer(choice, id)
    },2000)
}

//#PEDRA __________________________________________________

iconNavPedra.onclick = () => {
    handlePlay("pedra", "player")
}

//#PAPEL __________________________________________________

iconNavPapel.onclick = () => {
    handlePlay("papel","player")
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

function setScore() {
    const playerChoice = domElements.player.dataset.choice
    const cpuChoice = domElements.cpu.dataset.choice
    console.log(playerChoice)
    console.log(cpuChoice)
}
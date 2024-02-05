//VERIFICAR REMOÇÂO DA DIV
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
}
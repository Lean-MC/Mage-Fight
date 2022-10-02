const FIRE = "fire"; /*ROCK */
const WATER = "water";/*PAPER */
const THUNDER = "thunder";/*SCISSOR */
const METEORO = "meteoro";/*METEO*/
const LIGHT = "light";/*METEO*/
const BUFF = "buff";/*METEO*/

const TIE = 0;
const WIN = 1;
const LOST = 2;
const ABSORB = 3;

let isPlaying = false;

const fireBtn = document.getElementById("fire");
const waterBtn = document.getElementById("water");
const thunderBtn = document.getElementById("thunder");
const meteoroBtn = document.getElementById("meteoro");
const lightBtn = document.getElementById("light");
const buffBtn = document.getElementById("buff");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

fireBtn.addEventListener("click", () => {
    play(FIRE);
});
waterBtn.addEventListener("click", () => {
    play(WATER);
});
thunderBtn.addEventListener("click", () => {
    play(THUNDER);
});
meteoroBtn.addEventListener("click", () => {
    play(METEORO);
});
lightBtn.addEventListener("click", () => {
    play(LIGHT);
});
buffBtn.addEventListener("click", () => {
    play(BUFF);
});

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".gif";

    resultText.innerHTML = "Attack!";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".gif";
    }, 500);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".gif";

        switch (result) {
            case TIE:
                resultText.innerHTML = "Break!";
                break;
            case WIN:
                resultText.innerHTML = "Win!";
                break;
            case LOST:
                resultText.innerHTML = "Lost!";
                break;
            case ABSORB:
                resultText.innerHTML = "Absorb!";
                break;
        }
        isPlaying = false;
    }, 500);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 6);
    switch (number) {
        case 0:
            return FIRE;
        case 1:
            return WATER;
        case 2:
            return THUNDER;
        case 3:
            return METEORO;
        case 4:
            return LIGHT;
        case 5:
            return BUFF;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === FIRE) {

        if (machineOption === WATER) return LOST;
        if (machineOption === THUNDER) return WIN;
        if (machineOption === METEORO) return LOST;
        if (machineOption === LIGHT) return LOST;
        if (machineOption === BUFF) return ABSORB;

    } else if (userOption === WATER) {

        if (machineOption === THUNDER) return LOST;
        if (machineOption === FIRE) return WIN;
        if (machineOption === METEORO) return LOST;
        if (machineOption === LIGHT) return LOST;
        if (machineOption === BUFF) return ABSORB;

    } else if (userOption === THUNDER) {

        if (machineOption === FIRE) return LOST;
        if (machineOption === WATER) return WIN;
        if (machineOption === METEORO) return LOST;
        if (machineOption === LIGHT) return LOST;
        if (machineOption === BUFF) return ABSORB;

    } else if (userOption === METEORO) {
        if (machineOption === FIRE) return WIN;
        if (machineOption === WATER) return WIN;
        if (machineOption === THUNDER) return WIN;
        if (machineOption === LIGHT) return TIE;
        if (machineOption === BUFF) return ABSORB;

    } else if (userOption === LIGHT) {
        if (machineOption === FIRE) return WIN;
        if (machineOption === WATER) return WIN;
        if (machineOption === THUNDER) return WIN;
        if (machineOption === METEORO) return TIE;
        if (machineOption === BUFF) return ABSORB;

    } else if (userOption === BUFF) {
        if (machineOption === FIRE) return ABSORB;
        if (machineOption === WATER) return ABSORB;
        if (machineOption === THUNDER) return ABSORB;
        if (machineOption === METEORO) return ABSORB;
        if (machineOption === LIGHT) return ABSORB;
    }
    
}
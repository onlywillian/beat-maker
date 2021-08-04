const audio = [
    new Audio("./audio/Samples/808-truth.wav"),
    new Audio("./audio/Samples/kick-electro01.wav"),
    new Audio("./audio/Samples/kick-blueface.wav"),
    new Audio("./audio/Samples/kick-gold.wav"),
    new Audio("./audio/Samples/snare-lofi02.wav"),
    new Audio("./audio/Samples/snare-block.wav"),
    new Audio("./audio/Samples/snare-cofee.wav"),
    new Audio("./audio/Samples/snare-cry.wav"),
    new Audio("./audio/Samples/snare-snake.wav"),
    new Audio("./audio/Samples/tom-808.wav"),
    new Audio("./audio/Samples/clap-art.wav"),
    new Audio("./audio/Samples/clap-death.wav"),
    new Audio("./audio/Samples/hihat-808.wav"),
    new Audio("./audio/Samples/hihat-analog.wav"),
    new Audio("./audio/Samples/hihat-bought.wav"),
    new Audio("./audio/Samples/hihat-spice.wav"),
    new Audio("./audio/Samples/clap-fat.wav"),
];

const inputClassName = [
    'truth', 'electro', 'blueface', 'gold', 'lofi', 'block',
    'cofee', 'cry', 'snake', 'tom', 'art', 'death', 'hihat',
    'analog', 'bought', 'spice', 'fat'
];

const columns = 15, rows = 45;

function insertSoundsContents() {
    const main = document.querySelector('main');
    for (let i = 0; i <= columns; i++) {
        const div = document.createElement('div');
        main.appendChild(div);
        div.className = inputClassName[i];
    }
    main.querySelectorAll('div').forEach(element => {
        for (let index = 1; index <= rows; index++) {
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            element.appendChild(checkbox);
        }
    });
};

insertSoundsContents()

var inputs = []

function addClass() {
    for (let idx = 0; idx <= columns; idx++) {
        inputs[idx] = document.querySelector(`.${inputClassName[idx]}`)
        .querySelectorAll('input');
    }
}

addClass()

const playAndPause = document.getElementById('play');
const settings = document.getElementById('settings');
const speedValue = document.getElementById('speed').value;

let moveIndex = 0;
let speed = 200;
let interval;
let flag = false;

playAndPause.addEventListener('click', () => {
    if (flag == true) {
        playAndPause.innerHTML = 'Play';
        clearInterval(interval);
        return flag = false;
    }

    playAndPause.innerHTML = 'Stop';

    interval = window.setInterval(() => {
        if (moveIndex >= rows) moveIndex = 0;
    
        playSound();
    
        moveIndex += 1;
    }, speed);

    flag = true;
});


function playSound() {
    for (let i = 0; i <= columns; i++) {
        if (inputs[i][moveIndex].checked) audio[i].play();
    }
}
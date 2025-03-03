#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const currentValue = randomInteger(1, 2);

rl.question('Добро пожаловать в Орел или решка! 1 или 2?', (answer) => {
    if (currentValue === 1) {
        Number(answer) === currentValue ?
            console.log(`Победа! Правильный ответ: 1`) :
            console.log(`Мимо! :( Правильный ответ: 1`);
    }
    if (currentValue === 2) {
        Number(answer) === currentValue ?
            console.log(`Победа! Правильный ответ: 2`) :
            console.log(`Мимо! :( Правильный ответ: 2`);
    }
    rl.close();
});

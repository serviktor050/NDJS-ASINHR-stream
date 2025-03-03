#!/usr/bin/env node

const fs = require('fs')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const currentValue = randomInteger(1, 2);

rl.question('Добро пожаловать в Орел или решка! 1 или 2?', (answer) => {
    const argv = yargs(hideBin(process.argv)).argv;
    const file = argv._.length ? `${argv._[0]}.txt` : 'defaultLog.txt';

    if (currentValue === 1) {
        if (Number(answer) === currentValue) {
            const content = `${new Date()}: Победа \n`
            fs.appendFile(file, content, 'utf8', (err) => {
                if (err) throw err;
                console.log('Победа! Правильный ответ: 1')
            })
        } else {
            const content = `${new Date()}: Поражение \n`
            fs.appendFile(file, content, 'utf8', (err) => {
                if (err) throw err;
                console.log('Мимо! :(  Правильный ответ: 1')
            })
        }
    }
    if (currentValue === 2) {
        if (Number(answer) === currentValue) {
            const content = `${new Date()}: Победа \n`
            fs.appendFile(file, content, 'utf8', (err) => {
                if (err) throw err;
                console.log('Победа! Правильный ответ: 2')
            })
        } else {
            const content = `${new Date()}: Поражение \n`
            fs.appendFile(file, content, 'utf8', (err) => {
                if (err) throw err;
                console.log('Мимо! :(  Правильный ответ: 2')
            })
        }
    }
    rl.close();
});

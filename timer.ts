#! /usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
console.log(chalk.yellowBright("<<<<< ==================================== >>>>>"));
console.log(chalk.redBright(   "<<<<< welcome to the world countdown-timer >>>>>"));
console.log(chalk.yellowBright("<<<<< ==================================== >>>>>"));
console.log(chalk.greenBright("<<<<<<<<<<<<<<<<<< G.RAUF KHAN  >>>>>>>>>>>>>>>>>"));
console.log(chalk.yellowBright("<<<<< ==================================== >>>>>"));

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
console.log("\n");
async function promptUserForTime(): Promise<number> {
    console.log("\n");
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'seconds',
            message: 'Enter countdown time in seconds:',
            validate: (input: string) => {
                const value = parseInt(input, 10);
                if (isNaN(value) || value <= 0) {
                    return 'Please enter a valid number.you can,you can`t use Alphabet';
                }
                return true;
            }
        }
    ]);

    return parseInt(answers.seconds, 10);
}

async function displayCountdown(seconds: number) {
    console.clear();
    for (let i = seconds; i >= 0; i--) {
        console.clear();
        const timeString = `${String(Math.floor(i / 60)).padStart(2, '0')}:${String(i % 60).padStart(2, '0')}`;
        console.log(chalk.greenBright(figlet.textSync(timeString, { font: 'Standard', horizontalLayout: 'full' })));
        await sleep(1000);
    }
    console.log("\n");
    console.log(chalk.magentaBright('Countdown complete! may i help you !'));
}

async function main() {
    try {
        const seconds = await promptUserForTime();
        await displayCountdown(seconds);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
main();





#! /usr/bin/env node
import inquirer from "inquirer";
let loop = true;
while (loop) {
    const input1 = await inquirer.prompt({
        name: "weight",
        type: "number",
        message: "weight in (kg)"
    });
    const input2 = await inquirer.prompt({
        name: "height",
        type: "number",
        message: "height in (m)"
    });
    let total = input1.weight / (input2.height * input2.height);
    console.log(`your BMI is ${total}`);
    const calculateMore = await inquirer.prompt({
        name: "more",
        type: "confirm",
        message: "do you want to more calculation"
    });
    if (!calculateMore.more) {
        loop = false;
        console.log(`Thank you`);
    }
}

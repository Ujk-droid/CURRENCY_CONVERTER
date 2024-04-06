#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74,
    PKR: 280,
};
let userAnswers = await inquirer.prompt([{
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    }, {
        name: "amount",
        message: "Enter your amount",
        types: "number",
    },
]);
let fromAmount = currency[userAnswers.from];
let toAmount = currency[userAnswers.to];
let amount = userAnswers.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

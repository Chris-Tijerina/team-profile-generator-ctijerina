const inquirer = require ("inquirer");
const fs = require("fs");

const questions = () => {
    return inquirer.prompt({
        type: "text", 
        name: "name", 
        message: "What is the name of this employee?"
    })

}
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generatePage = require('./src/page-template');

class Team {
    constructor() {
        this.manager;
    }

    initializeTeam() {
        inquirer.prompt([
            {
                type: "text",
                name: "name",
                message: "What is the name of the manager?"
            },
            {
                type: "text",
                name: "id",
                message: "What is the manager's id number?"
            },
            {
                type: "text",
                name: "email",
                message: "What is the manager's email address?"
            },
            {
                type: "text",
                name: "officeNumber",
                message: "What is the manager's office number?"
            }
        ])
            .then(data  => {
                this.manager = new Manager(data.name, data.id, data.email, data.officeNumber);
                console.log(this.manager);
                this.checkMoreMembers();
            })
    };

    checkMoreMembers() {
        inquirer.prompt([ 
            {
                type: "confirm",
                name: "moreMembers",
                message: "Would you like to add more members of the team?",
                default: false
            }
        ])
        .then(data => {
            if(data.moreMembers) {
                console.log("add more members")
            } else {
                console.log("no more memebers")
            }
        })
    }
}

new Team().initializeTeam();



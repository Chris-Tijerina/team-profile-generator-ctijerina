const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generatePage = require('./src/page-template');
const Choices = require("inquirer/lib/objects/choices");

class Team {
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = [];
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
            .then(data => {
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
                if (data.moreMembers) {
                    console.log("add more members");
                    this.nextMember();
                } else {
                    console.log("no more members")
                }
            })
    };

    nextMember() {
        inquirer.prompt([
            {
                type: "list",
                name: "pickMemberType",
                message: "What type of team member would you like to add?",
                choices: ["Engineer", "Intern"]
            }
        ])
            .then(data => {
                if (data.pickMemberType === "Engineer") {
                    this.addEngineer();
                } else {
                    this.addIntern();
                }
            })
    };

    addEngineer() {
        inquirer.prompt([
            {
                type: "text",
                name: "name",
                message: "What is the name of the engineer?"
            },
            {
                type: "text",
                name: "id",
                message: "What is the engineer's id number?"
            },
            {
                type: "text",
                name: "email",
                message: "What is the engineer's email address?"
            },
            {
                type: "text",
                name: "github",
                message: "what is the engineer's GitHub username? "
            }
        ])
            .then(data => {
                this.engineers.push(new Engineer(data.name, data.id, data.email, data.github));
                console.log(this.engineers);
                this.checkMoreMembers();
            })
    };

    addIntern() {
        inquirer.prompt([
            {
                type: "text",
                name: "name",
                message: "What is the name of the intern?"
            },
            {
                type: "text",
                name: "id",
                message: "What is the intern's id number?"
            },
            {
                type: "text",
                name: "email",
                message: "What is the intern's email address?"
            },
            {
                type: "text",
                name: "school",
                message: "what school does the intern attend? "
            }
        ])
            .then(data => {
                this.interns.push(new Intern(data.name, data.id, data.email, data.school));
                console.log(this.interns);
                this.checkMoreMembers();
            })
    }
}

new Team().initializeTeam();



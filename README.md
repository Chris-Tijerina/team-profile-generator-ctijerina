# Team Profile Generator
GitHub Link: https://github.com/Chris-Tijerina/team-profile-generator-ctijerina

Walkthrough Video: https://watch.screencastify.com/v/bASlQlipbzwbDODHIlLM 

## Description
A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
Acceptance Criteria: 
Given a command-line application that accepts user input, when I am prompted for my team members and their information, then an HTML file is generated that displays a nicely formatted team roster based on user input.

> There were no issues generating the HTML document through the application. Formatting the HTML through the template literal wasn't as easy as it seemed at first, but otherwise I think it came out well. Nor were there any issues creating the clickable GitHub and email links. 

When I start the application, then I am prompted to enter the team manager’s name, employee ID, email address, and office number. 

> I didn't have any issues with creating the prompts for the manager. 

When I enter the team manager’s name, employee ID, email address, and office number, then I am presented with a menu with the option to add an engineer or an intern or to finish building my team. 

> Creating the questions was easy, but the order in which everything is run took some trial and error. The object oriented aspect of it was tricky, but made the creation of the html much simpler in the end. 

WHEN I select the engineer option, thenI am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu. When I select the intern option, then I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu. 

> After having made the manager questions, it was easy enough to create a similar set of questions for the engineer and intern.

When I decide to finish building my team, then I exit the application, and the HTML is generated. 

> Having the index set up the way I did intially made it difficult to know where to call my writeFile function. I settled on calling it in the page-template, since it would only be called if the page was being created and in no other context, so it made more sense to place it in there. 

## Instruction 

> In order to use this application you will have to download the repository, or clone it, and open it up in your chosen terminal (Vs.Code, GitBash, Terminal for Mac, etc.). Then you will have to ensure that node package manager has been installed (using "npm install" in the terminal) and you'll need to install Inquirer as well, (by typing "npm install inquirer" into your terminal). You can then run the application by typing "node index". The video attached at the top shows what will occur.

## Licenses
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Contributing
If you would like to contribute: 

> Fork the repo and create your branch from master. If you've added code that should be tested, add tests. If you've changed APIs, update the documentation. Ensure the test suite passes. Make sure your code lints and report any bugs by opening a new issue. 

## Questions

> If you have any questions contact me at ctijerina@live.com or through my Github Link: https://github.com/Chris-Tijerina
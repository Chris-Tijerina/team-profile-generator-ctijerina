
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const writeFile = require("./create-html");

function generateManagers(data) {
    var managerSection = `
    <div class="card shadow p-3 m-3 bg-white rounded">
        <div class="card-body text-center">
            <h2 class="card-title p-3 bg-primary rounded">${data.manager.name}</h2>
            <h3 class="card-subtitle m-2 text-muted"><i class="bi bi-briefcase-fill"></i>${data.manager.getRole()}</h3>
            <div class="card" style="width:100%;">
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item">ID: ${data.manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.manager.email}">${data.manager.email}</a></li>
                    <li class="list-group-item">Office: ${data.manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `
    return managerSection;
}
function generateEmployees(data) {
    var employeeSection = "";
    for (let i = 0; i < data.engineers.length; i++) {
        employeeSection += `
    <div class="card shadow p-3 m-3 bg-white rounded">
        <div class="card-body text-center">
            <h2 class="card-title p-3 bg-primary rounded">${data.engineers[i].name}</h2>
            <h3 class="card-subtitle m-2 text-muted"><i class="bi bi-gear-fill"></i> ${data.engineers[i].getRole()}</h3>
            <div class="card" style="width:100%;">
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item">ID: ${data.engineers[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.engineers[i].email}">${data.engineers[i].email}</a></li>
                    <li class="list-group-item">GitHub: <a href="http://www.github.com/${data.engineers[i].github}">${data.engineers[i].github}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `
    };

    for (let i = 0; i < data.interns.length; i++) {
        employeeSection += `
    <div class="card shadow p-3 m-3 bg-white rounded">
        <div class="card-body text-center">
            <h2 class="card-title p-3 bg-primary rounded">${data.interns[i].name}</h2>
            <h3 class="card-subtitle m-2 text-muted"><i class="bi bi-person-fill"></i> ${data.interns[i].getRole()}</h3>
            <div class="card" style="width:100%;">
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item">ID: ${data.interns[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.interns[i].email}">${data.interns[i].email}</a></li>
                    <li class="list-group-item">School: ${data.interns[i].school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
    };

    return employeeSection;
}

function generatePage(data) {
    var pageData =
        `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link re="stylesheet" href="stylesheet.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    </head>

    <body>
    <nav class="navbar navbar-light bg-primary justify-content-center mb-4">
        <a class="h1 navbar-text" href="#">
        My Team
        </a>
    </nav>

    <div class="container">
        <div id="manager" class="card-group">
            ${generateManagers(data)}   
        </div>
    

        <div id="employees" class="card-group">
            ${generateEmployees(data)}
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
    writeFile(pageData);
}

module.exports = generatePage;
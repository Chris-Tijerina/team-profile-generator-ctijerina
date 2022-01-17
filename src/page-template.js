
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const writeFile = require("./create-html");


function generateEmployees(data) {
    var employeeSection = "";
    for(let i = 0; i < data.engineers.length; i++) {
        employeeSection += `<div class="col-4 bg-primary h2 border border-dark border-3 m-4 p-2">
        <div class="card m-2 box-shadow text-center border-2">
            <div class="bg-primary h2 border border-2 border-dark">
                <span>${data.engineers[i].name}</span>
                <br>
                <span>${data.engineers[i].getRole()}</span>
                <span>&#xf43f;</span>
            </div>
            <div class="col-12 bg-light text-start border border-2 border-dark">
                <p>ID: ${data.engineers[i].id} </p>
            </div>
            <div class="col-12 bg-light text-start border border-2 border-dark">
                <p>Email: ${data.engineers[i].email} </p>
            </div>
            <div class="col-12 bg-light text-start border border-2 border-dark">
                <p>GitHub: <a href="http://www.github.com/${data.engineers[i].github}">${data.engineers[i].github}</a> </p>
            </div>
        </div>
    </div>`
    }

    for(let i = 0; i < data.interns.length; i++) {
        employeeSection += `<div class="col-4 bg-primary h2 border border-dark border-3 m-4 p-2">
        <div class="card m-2 box-shadow text-center border-2">
            <div class="bg-primary h2 border border-2 border-dark">
                <span>${data.interns[i].name}</span>
                <br>
                <span>${data.interns[i].getRole()}</span>
                <span>&#xf43f;</span>
            </div>
            <div class="col-12 bg-light text-start border border-2 border-dark">
                <p>ID: ${data.interns[i].id} </p>
            </div>
            <div class="col-12 bg-light text-start border border-2 border-dark">
                <p>Email: ${data.interns[i].email} </p>
            </div>
            <div class="col-12 bg-light text-start border border-2 border-dark">
                <p>School: ${data.interns[i].school}</p>
            </div>
        </div>
    </div>`
    }

    return employeeSection
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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link re="stylesheet" href="stylesheet.css">
    </head>
    <body>
    <div class="container">
        <div class="col-12 h1 text-center bg-primary text-white">
            <p>My Team</p>
        </div>
    </div>

    <div class="album py-5 bg-light">
        <div class="container">

            <div id="manager" class="row flex justify-content-center">
                <div class="col-4 bg-primary h2 border border-dark border-3 m-4 p-2">
                    <div class="card m-2 box-shadow text-center border-2">
                        <div class="bg-primary h2 border border-2 border-dark">
                            <span>${data.manager.name}</span>
                            <br>
                            <span>Manager &#xf43f;</span>
                        </div>
                        <div class="col-12 bg-light text-start border border-2 border-dark">
                            <p>ID: ${data.manager.id} </p>
                        </div>
                        <div class="col-12 bg-light text-start border border-2 border-dark">
                            <p>Email: ${data.manager.email} </p>
                        </div>
                        <div class="col-12 bg-light text-start border border-2 border-dark">
                            <p>Office: ${data.manager.officeNumber} </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="employees" class="row flex justify-content-center">
            ${generateEmployees(data)}
            </div>

        </div>


    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
    writeFile(pageData);
}

module.exports = generatePage;
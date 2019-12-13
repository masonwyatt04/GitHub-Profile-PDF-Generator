const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');


function questionUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your favorite color?",
            name: "favoriteColor"
        },
        {
            type: "input",
            message: "Where are you from?",
            name: "location",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "gitHubUsername"
        },
    ])
    .then( function(userInput) {
        
    })
}

function generateHTML(userInput) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
        
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</head>

<body>

    <div class="row" id="header">

    </div>
    
    <div class="introBlock">

        <div class="row">
            <div class="col">
                <img src="" alt="">
            </div>
        </div>
            
        <div class="row">
            <div class="col">
                <h1>Hello Everyone!</h1>
            </div>
        </div>
            
        <div class="row">
            <div class="col">
                <h1>${userInput.gitHubUsername}</h1>
            </div>
        </div>
            
        <div class="row">
            <div class="col">
                <h3></h3>
            </div>
        </div>
            
        <div class="row">
            <div class="col">
                <h3></h3>
            </div>
        </div>

    </div>

    <div class="bottomBlock">

        <div class="row">
            <div class="col">

            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                    <div class="card-header"></div>
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text"></p>
                        </div>
                </div>
            </div>

            <div class="col-6">
                <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                    <div class="card-header"></div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                    <div class="card-header"></div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                    <div class="card-header"></div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row" id="footer">

    </div>

</body>
</html>`
}


questionUser().then( function(userInput) {
    console.log(userInput.favoriteColor);
    console.log(userInput.location);
    console.log(userInput.gitHubUsername);

    fs.writeFile( 'profile.html', 'hi', function(error) {
        if (error) throw ("Error! Your fs.writefile did not work!");
        console.log('Success!');
    })
})
// html template
function generateMyTeam(team) {
    console.log(team)
    function generateEngineer(engineer) {
        console.log(engineer)
        return `<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${engineer.getRole()}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${engineer.getName()}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">Id: ${engineer.getId()}</li>
          <li class="list-group-item">Github: <a href = "https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
      </div>`
    }

    function generateManager(manager) {
        console.log(manager)
        return `<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${manager.getRole()}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${manager.getName()} </li>
          <li class="list-group-item">Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Id:${manager.getId()} </li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
        </ul>
      </div>`
    }

    function generateIntern(intern) {
        console.log(intern)
        return `<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${intern.getRole()}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${intern.getName()}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">Id: ${intern.getId()}</li>
          <li class="list-group-item">School ${intern.getSchool()}</li>
        </ul>
      </div>`
    }
    const tempArr = []
    tempArr.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)).join(''))

    tempArr.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)).join(''))

    tempArr.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)).join(''))
    return tempArr.join('')

}



module.exports = team => {
    console.log(team)

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

        <title>MyTeam</title>
    </head>
    <body>
        <header class= "text-center bg-danger text-white">MyTeam</header>

        <div class= 'container'>
            <div class= 'row'>
            <div class= 'col-12 d-flex justify-content-center'>
                ${generateMyTeam(team)}
        </div>
        




        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>  
        <script src="index.js"></script>
    </body>
    </html>`
};


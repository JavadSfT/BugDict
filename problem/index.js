let bugType = document.querySelector('#bugType'), date = document.querySelector('#date'),
    bugProblem = document.querySelector('#bugProblem'), bugLanguage = document.querySelector('#bugLanguage'),
    bugSolution = document.querySelector('#bugSolution')

const urlParams = new URLSearchParams(window.location.search);
const greetingValue = Number(urlParams.get('problem') - 1);

fetch("../repo/BugDict.json").then(val => {
    return val.json()
}).then(item => {

    switch (item[greetingValue].type) {
        case 1:
            bugType.innerHTML = "#bug"
            break
        case 2:
            bugType.innerHTML = "#feture"
            break
    }
    date.innerHTML = item[greetingValue].date
    bugProblem.innerHTML = item[greetingValue].problem
    bugLanguage.innerHTML = item[greetingValue].language
    bugSolution.innerHTML = item[greetingValue].solution
})
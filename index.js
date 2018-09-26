// Categories:
    // Animals: http://jservice.io/popular/21 -> http://jservice.io/api/category?id=21
    // Nature: http://jservice.io/popular/267 -> http://jservice.io/api/category?id=267

function randNum(max) {
    return Math.floor(Math.random() * max);
}

function displayText(text) {
    let element = document.createElement("div");
    let divText = document.createTextNode(text);
    element.appendChild(divText);
    let place = document.getElementById("animals");
    place.appendChild(element);
}

function displayTextAnswer(text) {
    let element = document.createElement("div");
    let divText = document.createTextNode(text);
    element.appendChild(divText);
    let place = document.getElementById("animal-answer");
    place.appendChild(element);
}

function displayText2(text) {
    let element2 = document.createElement("div");
    let divText2 = document.createTextNode(text);
    element2.appendChild(divText2);
    let place2 = document.getElementById("nature");
    place2.appendChild(element2);
}

function displayTextAnswer2(text) {
    let element2 = document.createElement("div");
    let divText2= document.createTextNode(text);
    element2.appendChild(divText2);
    let place2 = document.getElementById("nature-answer");
    place2.appendChild(element2);
}

function showAnimalAnswer () {
    document.getElementById("animal-answer").style.color = "black";
}

function showNatureAnswer () {
    document.getElementById("nature-answer").style.color = "black";
}

fetch("http://jservice.io/api/category?id=21")
    .then(res => res.json())
    .then(data => {
        let animalCategory = data.clues[randNum(260)];
        let question = animalCategory.question;
        let answerText = animalCategory.answer;
        displayText(`Category: ${data.title} | Clue: ${question}`)
        displayTextAnswer(answerText)
    })

// fetch("http://jservice.io/api/category?id=267")
//     .then(res => res.json())
//     .then(data => {
//         let natureCategory = data.clues[randNum(155)];
//         let natureQuestion = natureCategory.question;
//         let natureAnswerText = natureCategory.answer;
//         displayText2(`Category: ${data.title} | Clue: ${natureQuestion}`)
//         displayTextAnswer2(natureAnswerText)
//     })

async function natureTest() {
    let res = await fetch("http://jservice.io/api/category?id=267")
    let natureCategory = await res.json()
    let natureQuestion = natureCategory.clues[randNum(155)]

    displayText2(`Category: ${natureCategory.title} | Clue: ${natureQuestion.question}`)
    displayTextAnswer2(natureQuestion.answer)
}

natureTest();

function replay() {
    location.reload();
}
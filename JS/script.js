// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplicador-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicador")

const multiplicationTitle = document.querySelector("#mutiplicador-titulo span")

const multiplicationTable =document.querySelector("#multiplicador-operacao")

// Função
const createTable = (number, multiplicationNumber) => {

    multiplicationTable.innerHTML = ""

    for(i = 1; i <= multiplicationNumber; i++){

        const result = number * i

        const template =`<div class= "row">
            <div class = "operation"> ${number} x ${i} = </div>
            <div class = "result"> ${result}</div>
            </div>`;

        const parser = new DOMParser

        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row)
    }

    multiplicationTitle.innerHTML = number;

}

// Eventos
multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber)
})
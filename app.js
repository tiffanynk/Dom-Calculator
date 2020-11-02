// THIS CODE WORKS WITH SCRIPT DEFER SRC IN HTML
const screen = document.querySelector('#screen')
const buttons = document.querySelectorAll('span')
const buttonsDiv = document.querySelector('#buttons-container')

const clear = document.getElementById('clear')

let calculatorString = "";

buttonsDiv.addEventListener("click", (event) => {
    let calculatorString = event.target.textContent
    screen.append(calculatorString)

    if (calculatorString === "C"){
        clearValue()
    } 
    if (calculatorString === '='){
        calculateResponse()
    }
})

function clearValue(){
    screen.innerHTML = ''
}

function calculateResponse(){
    const forumlaString = screen.textContent.slice(0, -1)
    const correctString = forumlaString.replace(/x/g, '*').replace(/÷/g, '/')
    const result = eval(correctString)
    clearValue()
    screen.append(result)
}
document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('#screen');
    const buttons = document.querySelectorAll('span');
    const buttonsDiv = document.querySelector('#buttons-container');
    const clear = document.querySelector('#clear');

    //dynamic dispatch vs switch
    const operations = {
        '=': calculateResponse,
        'C': clearValue,
        default: inputExpression => screen.textContent += inputExpression,
    }

    // operations["="] || operations.C get back a function

    buttonsDiv.addEventListener('click', (event) => {
        let inputExpression = event.target.textContent


        operation = operations[inputExpression] || operations['default']
        operation(inputExpression)

        //if/else vs switch
        // if (inputExpression === "C"){
        //     clearValue()
        // } else if (inputExpression === '='){
        //     calculateResponse()
        // } else { //this line allows us to delete the slice from line 28
        //     screen.append(inputExpression)
        // }
    })

    function clearValue(){
        screen.innerHTML = ''
    }

    function calculateResponse(){
        const forumlaString = screen.textContent
        const correctString = forumlaString
            .replace(/x/g, '*')
            .replace(/÷/g, '/')
        const result = eval(correctString)
        screen.textContent = result == 'Infinity'
            ? 'NOPE'
            : result
    }
})
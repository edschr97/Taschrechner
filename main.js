const input = document.querySelectorAll('.input')
const operator = document.querySelectorAll('.operator')
const equal = document.getElementById('equal')
const ac = document.getElementById('ac')
const display = document.getElementById('display')
let currentInput = ''
var inputs = []


input.forEach(function(inp) {
    inp.addEventListener('click', function() {
        currentInput = currentInput + inp.innerText
        if(inputs.length === 0 || typeof inputs[inputs.length - 1] === 'string') {
            inputs.push(parseInt(currentInput))
        } else {
            inputs[inputs.length -1 ] += inp.innerText
            inputs[inputs.length -1 ] = parseInt(inputs[inputs.length -1 ])
        }
        console.log(currentInput)
        display.innerText = currentInput
        refreahDisplay(currentInput)

    })
    
})

operator.forEach(function(ope) {
    ope.addEventListener('click', function() {
        
        if(inputs.length < 1) {
             inputs.push(parseInt(currentInput));
        }
      
        if(typeof inputs[inputs.length - 1] == 'string') {
            inputs[inputs.length - 1] = ope.innerText;
            
        } else {
            inputs.push(ope.innerText)
            currentInput = ''
            
        }
       
        
        console.log(ope.innerText)
        
    })

})

equal.addEventListener('click', function() {

    
    if(isNaN(inputs[0]))  {
        inputs.shift();
        inputs[1] = parseInt(inputs[0] + inputs[1])
        inputs.shift();
    } 

    var firstInput = parseInt(inputs[0]);

    currentInput = ''

    if(typeof input[0] === 'string'){
        inputs[1] = parseInt(inputs[0] + inputs[1]);
       
    }

    
  
    for(var j = inputs.length; j > 0; j--) {
        if(isNaN(inputs[inputs.length - 1])) {
            inputs.pop();
        } else {
            break
        }
    }
    

    for(var i = 0; i < inputs.length-1; i++) {
        if(inputs[i] === '+') {

            firstInput += parseInt(inputs[i+1]);
        } else if(inputs[i] === '-') {
            firstInput -= parseInt(inputs[i+1]);
        } else [
            //console.log("number")
        ]
    }

    inputs = [firstInput]


    currentInput = firstInput
    
    if(isNaN(currentInput)) {
        currentInput = 0
        inputs[0] = 0
    }

    refreahDisplay(currentInput)
    console.log('Solution: ' + inputs[0])
})

ac.addEventListener('click', function() {

    currentInput = '';
    inputs = []
    console.log("reset")
    refreahDisplay(display.innerText = `0`)

})


function refreahDisplay(input) {
    display.innerHTML = `<div>${input}</div>`
  
}

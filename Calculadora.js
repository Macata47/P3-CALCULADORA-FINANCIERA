
// CONSTRUCTOR es un metodo especial para crear e 
//inicializar un objeto creado a partir de una clase.

class Calculator{
   constructor(operand1Element, operand2Element){ 
    this.operand1Element = operand1Element; //en estos elementos "pintaremos los números"//
    this.operand2Element = operand2Element;
    this.clear();
   }
// Resetear los operandos de la calculadora
   clear(){
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = '';
    this.updateUI(); //actualizar la interfaz de usuario

    
   }

   // Para ver los operandos mas el operador
    updateUI(){
    this.operand1Element.innerHTML = this.operand1 + this.operator;
    this.operand2Element.innerHTML = this.operand2;
    }


// Añadir numeros nuevos
    appendNumber(number){
        if(number === "." && this.operand2.includes('.')) return; //Evita añadir varios puntos
        this.operand2 = this.operand2 === 0
                        ? number
                        : this.operand2.toString() + number;

                        this.updateUI();

    }

    delete(){
        if(this.operand2 === 0) return;
        this.operand2 = +this.operand2.toString().slice(0, -1);

        this.updateUI();
    }

    //Operaciones de la calculadora (+,-,*,/)

    operation(operator){
        if(this.operator){
            this.calc();
        }
        this.operator = operator;
        this.operand1 = +this.operand2 === 0 ? this.operand1 :this.operand2;
        this.operand2 = 0;
        this.updateUI();

    }

    calc(){
        switch(this.operator){
            case "+":
                this.operand1 = +this.operand1 + +this.operand2;
            break;
            case "-":
                this.operand1 = +this.operand1 - +this.operand2;
            break;
            case "*":
                this.operand1 = +this.operand1 * +this.operand2;
            break;
            case "/":
                this.operand1 = +this.operand1 / +this.operand2;
            break;
        }
        this.operator = "";
        this.operand2 = 0;
        this.updateUI();


    }

}

//Interaccion con el DOM (botones)

const operand1Element = document.querySelector("[data-operand-1")
const operand2Element = document.querySelector("[data-operand-2")
const clearButton = document.querySelector("[data-clear]")
const numberButtons = document.querySelectorAll("[data-number]")
const deleteButton = document.querySelector("[data-delete]")
const operationButtons = document.querySelectorAll("[data-operator]")
const equalsButton = document.querySelector("[data-equals]")

const calculator = new Calculator(operand1Element, operand2Element);

//Llamadas a las funciones de la calculadora

clearButton.addEventListener('click', () =>{
    calculator.clear();
});

numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerHTML);
    })
});

deleteButton.addEventListener('click', () =>{
    calculator.delete();
});

operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.operation(button.innerHTML);
    })
});

equalsButton.addEventListener('click', () =>{
    calculator.calc();
});






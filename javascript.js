//una funcion que calcule el promedio variables
function promedio() {
    var not1 = parseInt(prompt("ingrese la primera nota"))
    var not2 = parseInt(prompt("ingrese la segunda nota"))
    var not3 = parseInt(prompt("ingrese la tercera nota"))
    prom = (not1 + not2 + not3) / 3;
    if (prom > 3) {
    document.write("fecidades has pasado")
    }
    else {
    document.write("Repites el año")

    }

}

/* crea una funcion calculadora que reciva 3 parametros,un string llamado operaciones y dos
llamados num1, num2 entonces el string nos indica que tipo de operacion se llevara a cabo
entre num1 y num2 hacer suma resta, multiplicacion, divicion, exponente */
function calculadora() {
    let operaciones = prompt("que tipo de operacion deseas realizar (suma, resta, multiplicacion, divicion o exponente)");
    let num1 = parseInt(prompt("ingrese el primer numero"));
    let num2 = parseInt(prompt("ingrese el segundo numero"));

    let Resultado;

        if (operaciones == "suma") {
        document.write(Resultado = num1 + num2)
        } 
        else if (operaciones == "resta") {
        document.write(Resultado = num1 - num2)
        } 
        else if (operaciones == "multiplicacion") {
        document.write(Resultado = num1 * num2)
        } 
        else if (operaciones == "divicion") {
        document.write(Resultado = num1 / num2)
        } 
        else if (operaciones == "exponente") {
        document.write(Resultado = num1 ^ num2)
        }
        else{
        document.write(Resultado = "operacion invalida")
        }
    
}

//console.log(promedio())
console.log(calculadora()); 







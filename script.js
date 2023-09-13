const pantalla = document.getElementById("pantalla");
const result = document.getElementById("result");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton =>{
    boton.addEventListener("click", () =>{
        const botonApretado = boton.textContent.trim();

        if(boton.id === "clear"){
            pantalla.textContent = "0";
            result.textContent = "";
            return;
        }


        if(boton.id === "delete"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = 0;
                result.textContent = "";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }


        if(boton.id === "equal"){
            try {                
                result.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "Error!"
            }
            return;            
        }


        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado;    
        }else{
            pantalla.textContent += botonApretado;
        }                      
    });
});








































// var calculo = "";
// var seCalculo = false;

// function setInput(input) {
//     if (input) {
//         if(seCalculo){
//             clear();
//         }
//         calculo += input;
//         document.getElementById("calculo").innerHTML = calculo;
//     }
// }

// function setOperator(inputOperator) {
//     if (inputOperator) {
//         calculo += inputOperator;
//         document.getElementById("calculo").innerHTML = calculo;
//     }
// }

// function inputFuntions(input) {
//     switch (input) {
//         case "del":
//             calculo = calculo.substring(0,calculo.length - 1);
//             document.getElementById("calculo").innerHTML = calculo;
//       break;
//         case "clear":
//             clear();
//             break;
//         case "equal":
//             calculate();            
//             break;
//     }
// }

// function clear(){
//     calculo = "";
//     document.getElementById("calculo").innerHTML = "";
//     document.getElementById("result").innerHTML = "";
// }

// function calculate(){
//     seCalculo = true;
//     document.getElementById("result").innerHTML = parseFloat(calculo);
// }


// function inputOperators(input) {
//     switch (input) {
//         case "sum":
//             setOperator("+");
//             break;
//         case "res":
//             setOperator("-");
//             break;
//         case "mul":
//             setOperator("x");
//             break;
//         case "div":
//             setOperator("/");
//             break;
//     }
// }

// function inputsNumbers(input) {
//     switch (input) {
//         case "punt":
//             setInput(".");
//             break;

//         default:
//             setInput(input);
//             break;
//     }
// }

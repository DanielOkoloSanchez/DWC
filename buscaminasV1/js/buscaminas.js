let maxFilas = prompt("¿Cuantas filas quieres?");
let maxColumnas = prompt("¿Cuantas columnas quieres?");
let numMinas = prompt("¿Cuantas minas quieres introducir?")


document.write("<table>");
document.write("<tr>");


//creamos el tablero

for(let j = 0; j < maxColumnas; j++){
    document.write("<tr>");
    for(let i = 0; i < maxFilas; i++){
        document.write("<td></td>");
    }
}


document.write("</tr>");
document.write("</table>");

//crear array bidimensional para guardar las minas

let arrayTablero = [];
let contadorMinas = 0;
let posFila;
let posColumna;

for (let fila = 0; fila < maxFilas; fila++){
    arrayTablero[fila] = new Array(maxColumnas);
for (let columna = 0; columna < maxColumnas ; columna++){
    arrayTablero[fila][columna] = "";
}

}

//Poner minas

while (contadorMinas < numMinas) {
    posFila = Math.floor(Math.random()*maxFilas) ;
    posColumna = Math.floor(Math.random()*maxColumnas) ;
    
    if (arrayTablero[posFila][posColumna] != "MINA" ){
        arrayTablero[posFila][posColumna] = "MINA"
        contadorMinas++ ;
    };

   

   
}







let numMinasAlrrededor = 0;

for (let fila = 0; fila < maxFilas; fila ++){
    for (let columna = 0; columna < maxColumnas; columna++){
        numMinasAlrrededor = 0;
        if(arrayTablero[fila][columna] != "MINA"){ 
        for (let cFila = fila -1;  cFila < fila + 1; cFila++){
                for(let cColumna = columna - 1; cColumna < columna + 1; cColumna ++){
                    
                    if((cFila >= 0 && cFila < maxFilas) && (cColumna > 0 && cColumna < maxColumnas)){
                    
                    if (arrayTablero[cFila][cColumna] == "MINA"){
                        numMinasAlrrededor++;
                    }
                    }
                }
            }
            arrayTablero[fila][columna] = numMinasAlrrededor;
            
        }
    }
}



console.log(arrayTablero);
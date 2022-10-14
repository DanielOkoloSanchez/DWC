
function AppStart() {
    
    let maxFilas = prompt('¿Cuántas filas quieres?');
    let maxColumnas = prompt('¿Cuántas columnas quieres?');
    let numMinas = prompt('¿Cuántas minas quieres introducir?');
    
    arrayTablero = crearTablero(maxFilas,maxColumnas);
    ponerMinas(arrayTablero,maxFilas,maxColumnas);
    numMinasAlrrededor(arrayTablero,maxFilas,maxColumnas);
    pintarTablero(arrayTablero,maxFilas,maxColumnas);
}





function pintarTablero(tablero,filas,columnas) {
    document.write('<table>');

for (let i = 0; i < filas; i++) {
    document.write('<tr>');

    for (let j = 0; j < columnas; j++) {
        document.write('<td>'+ tablero[i][j] +'</td>');
    }

    document.write('</tr>');
}
document.write('</table>');

}



// Crear array bidimensional para guardar las minas





function crearTablero(filas,columnas) {

    let arrayTablero = [];
    console.log("crear tablero")

    for (let fila = 0; fila < filas; fila++) {
        arrayTablero[fila] = new Array(maxColumnas);
    
        for (let columna = 0; columna < columnas; columna++) {
            arrayTablero[fila][columna] = '';
        }
    }
    console.log(arrayTablero);
    return arrayTablero

}




function ponerMinas(arrayTablero,filas,columnas) {
    let posFila;
let posColumna;
let contadorMinas = 0;

while (contadorMinas < numMinas) {
    posFila = Math.floor(Math.random() * filas);
    posColumna = Math.floor(Math.random() * columnas);

    if (arrayTablero[posFila][posColumna] != 'MINA') {
        arrayTablero[posFila][posColumna] = 'MINA';
        contadorMinas++;
    };
 };
    
}



function numMinasAlrrededor(arrayTablero,filas,columnas) {

    let numMinasAlrededor;

    for (let fila = 0; fila < filas; fila++) {
        for (let columna = 0; columna < columnas; columna++) {
            numMinasAlrededor = 0;
            if (arrayTablero[fila][columna] != 'MINA') {
                for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                    if (cFila >= 0 && cFila < filas) {
                        for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                            if (cColumna >= 0 && cColumna < columnas &&
                                arrayTablero[cFila][cColumna] == 'MINA') {
                                
                                numMinasAlrededor++;
                            }
                        }
                    }
                    arrayTablero[fila][columna] = numMinasAlrededor;
                }
    
            }
        }
    }
}







AppStart()





  
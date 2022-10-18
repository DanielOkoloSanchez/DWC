class Tablero {
    constructor(filas,columnas){
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
    }

    crearTablero(){
        

            this.arrayTablero = [];
            
        
            for (let fila = 0; fila < this.filas; fila++) {
                this.arrayTablero[fila] = new Array(this.filas);
            
                for (let columna = 0; columna < this.columnas; columna++) {
                    this.arrayTablero[fila][columna] = '';
                }
            }
           
            
        
        }


    pintarTablero() {
            
        document.write('<table>');
        
        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');
        
            for (let j = 0; j < this.columnas; j++) {
                document.write('<td>'+ this.arrayTablero[i][j] +'</td>');
            }
        
            document.write('</tr>');
        }
        document.write('</table>');
        
        }

        
    

    modificarFilas(nuevasFilas){
        this.filas = nuevasFilas;
        
        this.crearTablero();
    }

    modificarColumnas(nuevasColumnas){
        this.columnas = nuevasColumnas;

        this.crearTablero();
    }
}


class Buscaminas extends Tablero{
    constructor(filas,columnas,numMinas){
        super(filas , columnas);
        this.numMinas = numMinas;


        this.ponerMinas();
        this.contarMinasAlrededor();
        
    }

    ponerMinas() {
        let posFila;
        let posColumna;
        let contadorMinas = 0;
    
    while (contadorMinas < this.numMinas) {
        posFila = Math.floor(Math.random() * this.filas);
        posColumna = Math.floor(Math.random() * this.columnas);
    
        if (this.arrayTablero[posFila][posColumna] != 'MINA') {
            this.arrayTablero[posFila][posColumna] = 'MINA';
            contadorMinas++;
        };
     };
        
    }

     contarMinasAlrededor() {

        let numMinasAlrededor;

        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                numMinasAlrededor = 0;
                if (this.arrayTablero[fila][columna] != 'MINA') {
                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                        if (cFila >= 0 && cFila < this.filas) {
                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                                if (cColumna >= 0 && cColumna < this.columnas &&
                                    this.arrayTablero[cFila][cColumna] == 'MINA') {
                                    
                                    numMinasAlrededor++;
                                }
                            }
                        }
                        this.arrayTablero[fila][columna] = numMinasAlrededor;
                    }
        
                }
            }
        }
       
    }
    
}
   
let buscaMinas1 = new Buscaminas(5,5,5);
console.log(buscaMinas1.arrayTablero);
buscaMinas1.pintarTablero();

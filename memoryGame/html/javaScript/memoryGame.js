class Tablero {

    constructor(filas,columnas){
        this.filas = filas;
        this.columnas = columnas
    }

     crearTablero() {

        this.arrayTablero = [];
   
   
        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = new Array(this.filas);
            
            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
                console.log(this.arrayTablero);
            }
           
            
        }
    
       
    } 



}

let tablero1 = new Tablero(2,2);
tablero1.crearTablero();
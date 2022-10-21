class Tablero {

    constructor(filas,columnas){
        this.filas = filas;
        this.columnas = columnas
    
    
        this.crearTablero();
    }

     crearTablero() {

        this.arrayTablero = [];
   
   
        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = new Array(this.filas);
            
            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
               
            }
           
            
        }
    
       
    }
    
    
    mostrarTablero(){
        document.write("<table>")
        for (let fila = 0; fila < this.filas ; fila++) {
            document.write("<tr>")
            for (let columna = 0; columna < this.columnas ; columna++) {
                
                        document.write("<td>"+this.arrayTablero[fila][columna]+"</td>")
                
            }

            document.write("</tr>")
        }

        document.write("</table>")
    }



}

let tablero1 = new Tablero(2,2);

tablero1.mostrarTablero();
console.log(tablero1);

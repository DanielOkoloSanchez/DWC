class Tablero {
   
    constructor(filas,columnas){
        this.filas = filas;
        this.columnas = columnas
    
    
        this.crearTablero();
    }

    pedirValores(){
        this.filas = prompt('¿Cuántas filas quieres?');
        this.columnas=prompt('¿Cuántas columnas quieres?');

        if((this.filas * this.columnas) % 2 != 0 || this.filas == 0 || this.columnas == 0 || this.filas < 0 || this.columnas < 0 || (this.filas * this.columnas)<4  ){
            alert("Error al introducir valores")
            this.pedirValores();
    } 

    
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


    modificarFilas(nuevasFilas){
        this.filas = prompt('¿Cuántas filas quieres?');
        
        this.crearTablero();
    }

    
}


let tablero1 = new Tablero(2,2);
tablero1.pedirValores();
tablero1.mostrarTablero();
console.log(tablero1);

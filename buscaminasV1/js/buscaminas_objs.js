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

        
    }

    class Buscaminas extends Tablero

    const buscaminas = new Tablero(5,5);
    console.log(buscaminas.arrayTablero);
    buscaminas.pintarTablero();

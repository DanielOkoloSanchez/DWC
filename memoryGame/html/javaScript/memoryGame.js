class Tablero {
   
    constructor(filas,columnas){
        this.filas = filas;
        this.columnas = columnas
    
    
        this.crearTablero();
    }

    pedirValores(){
        this.filas = prompt('¿Cuántas filas quieres?');
        this.columnas=prompt('¿Cuántas columnas quieres?');

        if((this.filas * this.columnas) % 2 != 0 || this.filas <= 0 || this.columnas <= 0 || (this.filas * this.columnas)<4  ){
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
                
                        document.write("<td><img src="+this.arrayTablero[fila][columna]+"></td>")
                
            }

            document.write("</tr>")
        }

        document.write("</table>")
    }


   

    
}

class MemoryGame extends Tablero{
    
    constructor(filas,columnas){
        super(filas,columnas);
    }


    crearParejas(){
        let posFila;
        let posColumna;
        let i = 0;
        let contarPareja = 0;
        let elementos = ["imgs/doom.jpeg","imgs/ashe.jpeg","imgs/dva.jpeg","imgs/hanzo.jpeg","imgs/kiriko.jpeg","imgs/mcCree.jpeg","imgs/mercy.jpeg","imgs/sigma.jpeg","imgs/soldier.jpeg","imgs/tracer.jpeg"];
        let maxCasillas = (this.filas * this.columnas)/2;
        
        while ( i < maxCasillas) {
            let j = 0;
            
            while (j<2) {

                

                posFila = Math.floor(Math.random() * this.filas);
                posColumna = Math.floor(Math.random() * this.columnas);
                console.log(elementos[contarPareja]);
                
                

                if(this.arrayTablero[posFila][posColumna] == ""){
                this.arrayTablero[posFila][posColumna] = elementos[contarPareja];
                contarPareja++;
                }else{
                    

                    continue;
                }

                if(contarPareja == 10){
                    contarPareja = 0;
                }
                
                j++;
                
            }

            i++;
            
            
            
            
        }
    
        console.log(this.arrayTablero);
      
    }
    

        
      
    }

let MemoryGame1 = new MemoryGame(2,2);
MemoryGame1.pedirValores();
MemoryGame1.crearParejas();
MemoryGame1.mostrarTablero();
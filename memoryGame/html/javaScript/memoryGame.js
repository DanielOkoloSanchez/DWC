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
                
                        document.write("<td>"+this.arrayTablero[fila][columna]+"</td>")
                
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
    let parejas = [" " , " "];
    let pareja1;
    let pareja2;
    let elementos = ["A","B","X","T","P","I","N","Y","U","L"];
    let maxCasillas = this.filas * this.columnas;

    for (let i = 0; i < elementos.length; i++) {
        for (let j = 0; j < elementos.length; j++) {
             if (elementos[i]==elementos[j]) {
                pareja1 = elementos[i]; 
                pareja2 = elementos[j];

                parejas = [pareja1,pareja2];

                
            
            
            
               
            }
        
        
        }
        
        for (let k = 0; k < parejas.length; k++) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);
            

            

            
            this.arrayTablero[posFila][posColumna] = parejas[1]
            
        
        
    }

    

    

   
    



    
   }

   console.log(this.arrayTablero)
  
}

}

let MemoryGame1 = new MemoryGame(2,2);
MemoryGame1.pedirValores();
MemoryGame1.mostrarTablero();
MemoryGame1.crearParejas();
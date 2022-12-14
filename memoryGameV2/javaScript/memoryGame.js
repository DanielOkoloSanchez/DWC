class Tablero {
   
    constructor(filas,columnas){
        this.filas = filas;
        this.columnas = columnas
    
    
        this.crearTablero();
    }

    //Pide las columnas y filas que quiere el usuario también restringe los valores que puede introducir.

    pedirValores(){
        this.filas = prompt('¿Cuántas filas quieres?');
        this.columnas=prompt('¿Cuántas columnas quieres?');

        if((this.filas * this.columnas) % 2 != 0 || this.filas <= 0 || this.columnas <= 0 || (this.filas * this.columnas)<4  ){
            alert("Error al introducir valores")
            this.pedirValores();
    } 

    
            this.crearTablero();
    }
    
//Crea el array respecto a los valores introducidos anteriorente.
     crearTablero() {

        this.arrayTablero = [];
   
   
        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = new Array(this.filas);
            
            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
               
            }
           
            
        }
    
       
    }
    
//Muestra el tablero de juego con las parejas 
    mostrarTablero(){

        
        let tabla = document.createElement('table');
        let filaTablero;
        let columnaTablero;
        
        
        for (let fila = 0; fila < this.filas ; fila++) {
            filaTablero = document.createElement('tr');
            tabla.appendChild(filaTablero);
            for (let columna = 0; columna < this.columnas ; columna++) {
                
            columnaTablero = document.createElement('td');
            columnaTablero.id = `f${fila}_c${columna}`;
            columnaTablero.dataset.filaCordenada = fila;
            columnaTablero.dataset.columnaCordenada = columna;

            filaTablero.appendChild(columnaTablero);
                
            }

          
        }

        document.body.appendChild(tabla);

    }


   

    
}

class MemoryGame extends Tablero{
    
    constructor(filas,columnas){
        super(filas,columnas);
    }

    mostrarTablero(){

        
      super.mostrarTablero();
      let casilla;
        
        this.levantar = this.levantar.bind(this);

        for (let fila = 0; fila < this.filas ; fila++) {
            for (let columna = 0; columna < this.columnas ; columna++) {
                casilla = document.getElementById(`f${fila}_c${columna}`);
                
                casilla.addEventListener('contextmenu',this.levantar);
                
            }

          
        }

        

    }

    levantar(elEvento){
        let evento = elEvento || window.event;
        let casilla = evento.currentTarget;
        
        let fila = casilla.dataset.filaCordenada;
        let columna = casilla.dataset.columnaCordenada;
        let valorCasilla = this.arrayTablero[fila][columna];
        
        let imagen = document.createElement("img");

        
    }

// Crea e introduce las parejas al tablero de forma aleatoria.
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
               
                
                

                if(this.arrayTablero[posFila][posColumna] == ""){
                this.arrayTablero[posFila][posColumna] = elementos[contarPareja];
                
                }else{
                    continue;
                }

                
                
                j++;
                
               
                
            }
            
            //reinicia el contador de parejas si es necesario.

            contarPareja++;
            if(contarPareja == 10){
                contarPareja = 0;
            }
            i++;
           
            
            
        }
    
        console.log(this.arrayTablero);
      
    }
    

        
      
    }
   



window.onload = function(){
    let MemoryGame1 = new MemoryGame(2,2);
    MemoryGame1.pedirValores();
    MemoryGame1.crearParejas();
    MemoryGame1.mostrarTablero()
    
   
}


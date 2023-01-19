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
         this.idUltimaCasilla;
         this.ultimaFoto;
         this.contadorClic = 0;
         this.puntosObtenidos = 0;
         this.casillas =  this.columnas * this.filas;  
         this.puntuacionMaxima;
         this.intentos = 0;
         this.contadorParejas = 0;
         this.tiempo = 0;
         
         
         
       
    }

//funcion para mostrar tablero con eventListeners
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

// funcion para el correcto funcionamiento del tablero
    levantar(elEvento){
       let cronometro = setInterval(()=>this.tiempo++,1000); 
      
      
        let evento = elEvento || window.event;
        let casilla = evento.currentTarget;
        
        window.oncontextmenu = function() {
            return false;}

        let fila = casilla.dataset.filaCordenada;
        let columna = casilla.dataset.columnaCordenada;
        let valorCasilla = this.arrayTablero[fila][columna];
        let idCasilla = casilla.id;
        let imagen = document.createElement("img");
        imagen.src=valorCasilla;
        let ultimaCasilla = document.getElementById(this.idUltimaCasilla);
        
    
//Destapa la casilla 
        
        if (casilla.lastChild == null) {
            
            
            casilla.appendChild(imagen);
            this.contadorClic++;
// Mira que sean casillas distintas y que la imagen sea distinta o igual 
           if (this.idUltimaCasilla!=idCasilla && this.idUltimaCasilla!=null) {
            
                if(this.ultimaFoto!=valorCasilla){
               
                    console.log("casilla distinta")

                    this.intentos++;

                    setTimeout(borrar,700);
           
// funcion para tapar casillas
            function borrar(){
            casilla.removeChild(casilla.lastChild);
            ultimaCasilla.removeChild(ultimaCasilla.lastChild);
            
        }
            
            }else{
                
                   
// Comprueba la puntuacion segun los intentos.

                    if (this.intentos == 0) {
                        this.puntosObtenidos = this.puntosObtenidos + 10;
                    }else if (this.intentos == 1 ){
                        this.puntosObtenidos = this.puntosObtenidos + 5;
                        
                    }else if (this.intentos == 2){
                        this.puntosObtenidos = this.puntosObtenidos + 2.5;
                    }else{
                        this.puntosObtenidos = this.puntosObtenidos + 0;
                    
                }
                this.contadorParejas++;
                this.intentos = 0;
                this.actualizarDatosMarcador();
            }
            
          }
          
           this.idUltimaCasilla = idCasilla;
           this.ultimaFoto = valorCasilla;
          
// reinicia los valores almacenados
           if (this.contadorClic == 2) {
            this.idUltimaCasilla = null;
            this.ultimaFoto = null;
            this.contadorClic = 0; 
        }
           
        }
        
    }

// crea el boton de reinicio para que pueda ser visualizado.
    crearBoton(){
        let boton = document.createElement("div");
        this.reiniciarPartida = this.reiniciarPartida.bind(this);
        boton.id = "boton"

        document.body.appendChild(boton);

        boton.innerHTML = "Reiniciar";

        boton.addEventListener("click",this.reiniciarPartida);
    }

// Función para que el evento de el boton de reinicio funcione

    reiniciarPartida(elEvento){
        let evento = elEvento || window.event;
        let boton = evento.currentTarget;

        console.log("si");
        let opcion = confirm("Quiere reiniciar su partida");
        
        if (opcion == true) {

            location.reload();   
        }
        
    }

    //crea el marcador para poder ser visualizado 
    crearMarcador(){
        let marcador = document.createElement("div");
        
        document.body.appendChild(marcador);
        
        marcador.id="marcador";
        marcador.innerHTML = `${this.puntosObtenidos}/${this.puntuacionMaxima = (this.casillas/2) * 10}`;
        
    }

    //Funcion que actualiza los puntos del marcador y llama a la funcion ganar.

    actualizarDatosMarcador(){
        marcador.innerHTML = `${this.puntosObtenidos}/${this.puntuacionMaxima = (this.casillas/2) * 10}`;

        if (this.contadorParejas == this.casillas/2) {
           setTimeout(this.ganar,500);
           this.ganar();
              
            }
    }

    // Función que muestra la puntuación final y lo que has tardado en completarlo.

    ganar(){
        alert("Enhorabuena has gando , tu puntuación ha sido de " + this.puntosObtenidos + " puntos de " + this.puntuacionMaxima + " puntos y tu tiempo en segundos es de " + this.tiempo + "segundos")
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
    MemoryGame1.crearMarcador();
    MemoryGame1.mostrarTablero()
    MemoryGame1.crearBoton();
   
    
}
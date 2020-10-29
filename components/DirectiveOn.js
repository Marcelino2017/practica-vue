let DirectiveOn = {
    template: `
        <header >
            <h1 v-text="title" ></h1>
            <p v-html="messege"></p>
            <p v-html="pelicula"></p>
            <button @click.stop.prevent="comprarEntrada"> Comprar Entrada </button>
           <!-- <button v-on:click="comprarEntrada"> DAR CLICK </button>-->
           <!-- <button @click="comprarEntrada"> Comprar Entrada </button>--> 
            Disponoble : <span v-text="entradas"></span>
            <input type = "text" @keydown="decirHola" />
            <div>
                <h1>Modificcando Vista y Modelo</h1>
                <p v-text="textInput"></p>
                <input type="text" :value="textInput" @keyup="updateDateTextInput">
            </div>
        </header>
        
    `,
    data (){
        return {
            title    : 'Directivas v-on',
            messege  : '<b>Hola desde directive v-on</b>',
            welcome  : 'Bienvenido',
            pelicula : 'Dora la Exploradora', 
            entradas : 5,
            textInput :'Valor por Defecto del input text',
        }
    },

    methods: {
        updateDateTextInput: function (event) {
            this.textInput =event.target.value
        },
        decirHola: function () {
            alert(this.welcome)
        },
        comprarEntrada: function(params) {
            if (this.entradas > 0){
                this.entradas--
                console.log(this.entradas)
                alert(`Entrdas para ${this.pelicula} compradas`)
            } else {
                return alert('Ya no hay entradas')
            }

            
        },
        
    }
}
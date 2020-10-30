// Solo obtiene la data la primera vez y no estaria pendiente de esta seccion 
let DirectiveOnce = {
    template : `
        <div>
            <h1 v-once v-text="title"></h1>
        </div>
    `,
    data () {
        return {
            title: "Bienvenido v-once"
        }
    },
}
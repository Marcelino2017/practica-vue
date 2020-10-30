//con computed guaradar los elemtos en cache cache y 
//esperas que los elementos se tulize y se renderice la data
Vue.component('computed-properties',{
    template: `
        <div>
            <h1>Computed-Properties</h1>
            <p> Hola soy {{fullName}}</p>
            <p> Tengo {{userAge}} años</p>
        </div>
    `,
    data() {
        return {
            user: {
                name     : 'Camilo',
                lastName : 'Perez',
                year     : '1995'
            }
        }
    },
    computed: {
        fullName (){
            return `${this.user.name} ${this.user.lastName}`
        },
        userAge(){
            let data = new Date()
            let currentYear = data.getFullYear()

            return currentYear - Number(this.user.year)
        }
    },
    methods: {
        nombreCompleto (){
            return `${this.user.name} ${this.user.lastName}`
        }
    },
})
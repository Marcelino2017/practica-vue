//con computed guaradar los elemtos en cache cache y 
//esperas que los elementos se tulize y se renderice la data
Vue.component('computed-properties-get-set',{
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
        fullName : {
            get(){

                return `${this.user.name} ${this.user.lastName}`
            },
            set(newVaule){
                let name = newVaule.splice(' ')
                
                this.user.name = name[0]
                this.user.lastName = name[1]
            }
        },
        userAge(){
            let data = new Date()
            let currentYear = data.getFullYear()

            return currentYear - Number(this.user.year)
        }
    },
   
})
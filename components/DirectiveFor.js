let DirectiveFor = {
    template: `
    <div>
        <h1 v-text="title" ></h1>
        <p v-html="messege"></p>
        <ul>
            <!--<li v-for="(item, index) in list" :key="index" v-text="item"></li>-->
            <li v-for="(item, key, index) in object_list" :key="index"> 
                {{ key }} : {{ item }}
            </li>
            <li v-for="(item, key, index) in other_list" :key="index"> 
                Nombre: {{ item.name }} <br>
                Apellido: {{ item.last_name }} <br>
                Nick: {{item.nick}}
            </li>
        </ul>
    </div>
`,
data (){
        return {
            title    : 'Directivas v-form',
            messege  : '<b>Hola desde directive v-form</b>',
            list     : ['Rojo', 'Amarillo', 'Azul', 'Azul', 'Purpura', 'Rosa'],
            object_list : {
                name      : 'Luis',
                last_name : 'Perez',
                nick      : 'Lopvi' 
            },
            other_list: [
                {
                    name      : 'Luis',
                    last_name : 'Perez',
                    nick      : 'Lopvi' 
                },
                {
                    name      : 'Pacho',
                    last_name : 'Carranza',
                    nick      : 'Isanca' 
                }, 
                {
                    name      : 'Camila',
                    last_name : 'Zapata',
                    nick      : 'Isaca' 
                }
            ]
            
        }
    }
}
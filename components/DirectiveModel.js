let DirectiveModel = {
    template: `
        <div>
            <h1 v-text="title" ></h1>
            <p v-show="mostrar" v-html="messege"></p>
            <p v-show="user.permission"> EL usuario Tiene permiso para ver esto </p>
            <p v-show="!user.permission"> EL usuario Tiene No permiso para ver esto </p>
        </div>
    `,
    data (){
        return {
            title    : 'Directivas v-model',
            messege  : '<b>Hola desde directive v-model</b>',
            mostrar  : true,
            user     : {
                permission : true
            } 
        }
    }
}
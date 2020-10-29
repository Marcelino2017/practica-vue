let DirectiveIf = {
    template: `
    <div>

        <h1 v-text="title" ></h1>
        <p v-if="mostrar" v-html="messege"></p>
        <p v-if="user.permission"> EL usuario Tiene permiso para ver esto </p>
        <p v-else="!user.permission"> EL usuario Tiene No permiso para ver esto </p>
        <h1>Uso del v-if / v-else / v-else-if</h1>
        <p v-if="user.permission && user.vip"> EL usuario Tiene permiso para ver esto y es VIP </p>
        <p v-else-if="user.permission"> EL usuario Tiene permiso para ver esto</p>
        <p v-else-if="user.vip"> EL usuario es VIP</p>
        <p v-else> EL usuario Tiene No permiso para ver esto Ni es VIP</p>
    </div>
`,
data (){
        return {
            title    : 'Directivas v-if',
            messege  : '<b>Hola desde directive v-if</b>',
            mostrar  : true,
            user     : {
                permission : true,
                vip        : true,
            } 
        }
    }
}
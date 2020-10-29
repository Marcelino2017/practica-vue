let DirectiveModel = {
    template: `
        <div>
            <h1 v-text="title" ></h1>
            <p v-html="messege"></p>
            <p v-text="input" ></p>
            <input type="text" v-model="input">

            <h2>Tipo CheckBok</h2>
            <label>
                <input type="checkbox" v-model="checked">
            </label>
        </div>
    `,
    data (){
        return {
            title    : 'Directivas v-model',
            messege  : '<b>Hola desde directive v-model</b>',
            input    : 'Data del Input',
            checked  : false
        }
    }
}
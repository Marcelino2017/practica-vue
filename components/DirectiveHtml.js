let DirectiveHtml = {
    template: `
        <div>
           <h1 v-text="title" ></h1>
           <p v-html="messege"></p>
        </div>
    `,
    data (){
        return {
            title    : 'Directivas v-html',
            messege  : '<b>Hola desde directive html</b>',
        }
    }
}
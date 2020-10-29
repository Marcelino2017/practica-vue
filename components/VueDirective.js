Vue.component('vue-directive',{
    template: `
        <div>
        <h1 v-text="title" ></h1>
           <p v-text="text"></p>
           <a :href="link.href" :title="link.title" v-text="link.text"></a>
           <directive-html></directive-html>
           <directive-show></directive-show>
           <directive-if/>
           <directive-for/>
           <DirectiveOn/>         
           <DirectiveModel/>
        </div>
    `,
    data (){
        return {
            title : 'Directivas Vue.js',
            text  : 'texto de prueba v-text',
            link  : {
                text  : "VueJS  Home",
                href  : 'https://vuejs.org',
                title : 'Documentacio Vue JS'
            }
        }
    },
    components : {
        'directive-html': DirectiveHtml,
        'directive-show': DirectiveShow,
        DirectiveIf,
        DirectiveFor,
        DirectiveOn,
        DirectiveModel
    }
});
Vue.component('hello-word',{
    template: `
    <header>
        <h1>{{title}}</h1>
        <h3>{{ messege }}</h3>
    
    </header>`,

    data(){
        return {
            title: 'Hola mundo de Vue js',
            messege: 'Bienvenidos'
        }
    }
});

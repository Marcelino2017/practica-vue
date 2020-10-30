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
                Activado
            </label>

            <h3 >Pelicula</h3>
            <label v-for="(movie, key) in movies" :key>
                 <input :value="movie"  type="checkbox" v-model="favoriteMovie">
                 {{movie}}
            </label>
            <div v-show="favoriteMovie.length > 0">
                <h3>Peliculas Favoritas</h3>
                <ul>
                    <li v-for="movie in favoriteMovie" :value="movie"  >{{movie}}</li>
                </ul>
            </div>
        </div>
    `,
    data (){
        return {
            title         : 'Directivas v-model',
            messege       : '<b>Hola desde directive v-model</b>',
            input         : 'Data del Input',
            favoriteMovie : [],
            checked       : false,
            movies        : ['Buscando a Nemo', 'Titanies', 'Toy Storie']
        }
    }
}
let MovieComp = {
    template: `
        <div>
            <img :src="cover"></img>
            <h2 v-text="title"></h2>
            <p v-text="synopsis"></p>
            <hr>
        </div>
    `,
    props: {
        id       : {
            type     : Number,
            required : true
        },
        title    : {
            type     : String,
            required : true
        },
        synopsis : {
            type     : String,
            default  : 'No posee synopsis'
        },
        cover   :{
            type     : String,
            required : true 
        }


    }
}
'id',
        'title',
        'synopsis',
        'cover'
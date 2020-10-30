let DirectiveSlot = {
    template : `
        <div>
            <h1 v-text="title"></h1>
            <button-comp>
                <template #action>
                    Cerrar
                </template>
                <template #ventana>
                    Modal
                </template>
            </button-comp>
        </div>
    `,
    data () {
        return {
            title: "Bienvenido v-slot"
        }
    },
    components : {
        buttonComp
    }
}
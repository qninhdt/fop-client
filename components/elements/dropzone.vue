<template>
    <div class='dropzone'>

        <b>{{name}}</b>
    </div>
</template>

<script>
import interact from 'interactjs'

export default {
    props: ['name', 'correct'],

    data: () => ({
        _correct: []
    }),

    mounted() {
        this._correct = this.correct.split(',').map(s => s.trim())

        interact(this.$el).dropzone({
            accept: '.drag-item',
            overlap: .9,

            ondragenter: event => {
                let name = event.relatedTarget.textContent

                if (this._correct.includes(name)) {
                    event.relatedTarget.classList.add("correct")
                    const sound = new Audio("/app/public/correct.mp3")
                    sound.play()
                } else {
                    event.relatedTarget.classList.add("wrong")
                    const sound = new Audio("/app/public/wrong.mp3")
                    sound.play()
                }
            },

            ondragleave: event => {
                event.relatedTarget.classList.remove('correct')
                event.relatedTarget.classList.remove('wrong')
            }
        })
    }
}
</script>

<style>
    .dropzone {
        width: 100%;
        padding: 2rem;
        min-height: 10rem;
        background: rgba(223, 249, 251, 0.397);
    }
    .dropzone.incoming {
        background-color: #74baff93;
    }
</style>
<template>
    <span class="drag-item">{{name}}</span>
</template>

<script>
import interactjs from 'interactjs'

export default {
    props: ['name'],
    data: () => ({
        position: {
            x: 0, y: 0
        }
    }),
    mounted() {
        interactjs(this.$el).draggable({
            listeners: {
                move: event => {
                    this.position.x += event.dx
                    this.position.y += event.dy

                    event.target.style.transform =
                        `translate(${this.position.x}px, ${this.position.y}px)`
                },
            }
        })
    }
}
</script>

<style>
    .drag-item {
        background: #f6e58d;
        padding: 1rem;
        width: fit-content;
        display: inline-block;
        color: rgb(112, 112, 0);
    }
    .drag-item.wrong {
        background-color: #eb4e4b;
        color: white;
    }
    .drag-item.correct {
        background-color: #2ecc71;
        color: white;
    }
</style>
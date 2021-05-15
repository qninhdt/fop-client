<template>
    <div :class="{hoverable: true, highlight: highlight}" @mouseenter="onHover" @mouseleave="highlight = false">
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            highlight: false
        }
    },
    methods: {
        onHover() {
            if (['OPEN', 'FOUR'].includes(window.hand.label)) {
                this.highlight = true
            }
        }
    }
}
</script>

<style>
    .hoverable {
        padding: .5rem;
        background: #ecf0f1;
        color: #2c3e50;
        box-shadow: 3px 5px #f39c12;
        transition-duration: .5s;
        margin: 1rem;
    }
    .hoverable:hover {
        background: #f39c12;
        color: whitesmoke;
        box-shadow: 2px 3px #f39c12;

    }
    .hoverable.highlight {
        transform: scale(1.2);
        box-shadow: 2rem 2rem 2rem 3rem #ccc;
    }
</style>
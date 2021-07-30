<template>
    <div :class="{hoverable: true, highlight: highlight}" @mouseenter="onHover" @mouseleave="highlight = false">
        <slot />
    </div>
</template>

<script>

import party from 'party-js'

export default {
    data() {
        return {
            highlight: false,
            last_pop: 0
        }
    },
    methods: {
        onHover() {
            let now = (new Date()).getTime() / 1000

            if (['OPEN', 'FOUR'].includes(window.hand.label)) {
                this.highlight = true

                if (this.last_pop + 2 < now) {
                    party.sparkles(this.$el)
                    const sound = new Audio("public/pop.mp3")
                    sound.play()
                    this.last_pop = now
                }
            }
        }
    }
}
</script>

<style>
    .hoverable {
        padding: .5rem 1rem;
        background: #ecf0f1;
        color: #2c3e50;
        transition: .5s .5s;
        margin: 1rem;
        border: 0.2rem solid rgba(220, 220, 220, 0.575);
    }
    .hoverable h2 {
        font-size: 2rem!important;
    }
    .hoverable:hover {
        transition-delay: 0s;
        border-color: #bd2edda6;
    }
    .hoverable.highlight {
        transform: scale(1.3);
        box-shadow: 4rem 4rem 6rem 8rem #2c3e50;
        background: #ecf0f1;
    }
</style>
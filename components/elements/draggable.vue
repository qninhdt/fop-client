<template>
    <div :class="{drag: true, horizontal: horizontal, correct: isCorrect}">
        <draggable 
            v-model="texts" 
            draggable=".item"
            direction="horizontal"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false">
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                <div v-for="d in texts" :key="d.i" class="item">
                    <span style="font-size: 2rem; margin: .1rem;">{{d.text}}</span>
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>

import partyjs from "party-js"
import Draggable from "vuedraggable"

export default {
    components: {
        Draggable
    },
    props: {
        data: "",
        horizontal: {
            require: false,
            default: false
        },
        correct: {
            require: false,
            default: ""
        }
    },
    data() {
        return { texts: [], _correct: [null], drag: false, }
    },
    mounted() {
        this.texts = this.data.split(",")
            .map(d => d.trim())
            .map((d, i) => ({ i, text: d }))
        this._correct = this.correct.split(",")
            .map(d => d.trim())
            .map((d, i) => d)
    },
    computed: {
        dragOptions() {
            return {
                animation: 200,
                group: "description",
                disabled: false,
                ghostClass: "ghost",
                direction: 'horizontal',
            }
        },
        isCorrect() {
            const _data = this.texts.map(d => d.text)
            const is_correct = JSON.stringify(_data) == JSON.stringify(this._correct)

            if (is_correct) {
                partyjs.confetti(this.$el, {
                    count: partyjs.variation.range(10, 200),
                    size: partyjs.variation.range(0.6, 2.6),
                })
                const sound = new Audio("/app/public/correct.mp3")
                sound.play()
            }

            return is_correct
        }
    }
}
</script>

<style>
    .drag {
        background: rgba(128, 128, 128, 0.5);
        border-radius: 2rem;
        overflow-y: hidden;
    }
    .drag.correct {
        background: rgba(0, 128, 0, 0.8);
    }
    .drag.correct .item {
        color: white;
    }
    .item:hover{
        background: rgba(220, 220, 220, 0.603);
    }
    .horizontal .item {
        display: inline-block;
        padding: .5rem 1.5rem;
        margin: .5rem .6rem;
        border-radius: 1rem;
        background: rgba(128, 128, 128, 0.3);
    }
</style>
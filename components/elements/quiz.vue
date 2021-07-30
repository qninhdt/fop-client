<template>
    <div class="quiz">
        <div class="question">
            {{ question }}
        </div>
        <div class="answers">
            <div :class="{
                'answer'  : true, 
                'correct' : select==i && dung==i,
                'wrong'   : select==i && dung!=i}" 
                v-for="(text,i) in ans" :key="i" @click="select=i">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script>

import party from 'party-js'

export default {
    props: [
        "question",
        "ans1",
        "ans2",
        "ans3",
        "ans4",
        "correct"
    ],
    data: ()=>({
        select: -1,
        ans: [],
        dung: -1,
    }),
    mounted() {
        this.dung = this.correct-1;
        this.ans = [ this.ans1, this.ans2, this.ans3, this.ans4 ]
    },
    watch: {
        select(to,from) {
            if (to==this.dung) {
                party.confetti(this.$el)
            }
        }
    }
}
</script>

<style>

.question {
    background: whitesmoke;
    color: black;
    padding: 2rem;
    font-size: 2rem;
    margin: 1rem;
}

.answers {
}

.answer {
    width: 40%;
    display: inline-block;
    padding: 2rem;
    margin: 1rem;
    background: rgb(161, 161, 161);
    color: white;
}

.answer:hover {
    background: rgb(139, 139, 139);
}

.answer.correct {
    background: #2ecc71;
}

.answer.correct:hover {
    background: #35ca73;
}

.answer.wrong {
    background: #e74c3c;
}

.answer.wrong:hover {
    background: #e75747;
}

.answer:nth-child(odd) {
    flex: 0 0 50px;
}

</style>
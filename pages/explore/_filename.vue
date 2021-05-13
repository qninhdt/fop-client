<template>
    <div class="reveal" v-html="text"></div>
</template>

<script>

    import Reveal from 'reveal.js';
    import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
    import 'reveal.js/dist/reveal.css'
    import 'reveal.js/dist/theme/black.css'
    import hljs from 'highlight.js/lib/core';
    import cpp from 'highlight.js/lib/languages/cpp';
    import pascal from 'highlight.js/lib/languages/ruby'
    import "highlight.js/styles/github.css"

    hljs.registerLanguage('cpp', cpp);
    hljs.registerLanguage('pas', pascal);

    var deck 

    export default {
        head: data => ({
            title: 'FocusOP ― ' + data.filename,
        }),
        data: () => ({
            text: ""
        }),
        async asyncData({ params }) {
            const filename = params.filename 
            return { filename }
        },

        async mounted() {
            deck = new Reveal({
                plugins: [ Markdown ],
            })

            this.$socket.emit('get_fop', this.filename, async (text) => {
                this.text = text

                await this.$nextTick()

                await deck.initialize();
                hljs.highlightAll()
            })

            this.$socket.on('new_hand_dir', hand_dir => {
                console.log(hand_dir)
                if (hand_dir == 'left') {
                    deck.left()
                } 
                if (hand_dir == 'right') {
                    deck.right()
                }
            })
        }
    }
</script>

<style>
    .reveal {
        height: 100vh!important;
    }
</style>
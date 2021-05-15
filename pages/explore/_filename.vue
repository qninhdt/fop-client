<template>
    <div style="height: 100vh; width: 100vw">
        <span id="cursor" :style="{ borderColor: cursorColor[0], backgroundColor: cursorColor[1]}"></span>

        <div class="reveal" v-html="text"></div>
        <canvas id="background"></canvas>
    </div>
</template>

<script>

    import Reveal from 'reveal.js';
    import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
    import 'reveal.js/dist/reveal.css'
    import 'reveal.js/dist/theme/white.css'
    import HlPlugin from 'reveal.js/plugin/highlight/highlight';
    import cpp from 'highlight.js/lib/languages/cpp';
    import pascal from 'highlight.js/lib/languages/ruby'
    import "highlight.js/styles/github.css"
    import Particles from "particlesjs"

    import File from "../../components/File.vue"

    // hljs.registerLanguage('cpp', cpp);
    // hljs.registerLanguage('pas', pascal);

    var deck 

    export default {

        components: {
            File
        },

        head: data => ({
            title: 'FocusOP ― ' + data.filename,
        }),
        data: () => ({
            text: "",
            hand_type: "",
            cursor: [0, 0]
        }),
        async asyncData({ params }) {
            const filename = params.filename 
            return { filename }
        },

        async mounted() {
            deck = new Reveal({
                plugins: [ Markdown, HlPlugin ],
            })

            this.$socket.emit('get_fop', this.filename, async (text) => {
                this.text = text

                await this.$nextTick()
                await deck.initialize();

                Particles.init({
                    selector: '#background',
                    connectParticles: true,
                    color: ['#e056fd', '#ff9ff3'],
                    minDistance: 150,
                    maxParticles: 50,
                });
            })

            window.hand = {}

            // CHANGE SLIDE
            this.$socket.on('new_hand_dir', hand_dir => {
                if (hand_dir == 'left') {
                    deck.left()
                } 
                if (hand_dir == 'right') {
                    deck.right()
                }

            })

            const cursor = document.getElementById('cursor')
            document.addEventListener('mousemove', e => {
                cursor.style.left = e.clientX + 'px'
                cursor.style.top = e.clientY + 'px'
            })

            this.$socket.on('new_hand_type', hand => {
                window.hand = hand
                this.hand_type = hand.label
            })

            
        },
        computed: {
            cursorColor() {
                if (this.hand_type == 'ROCK') {
                    return ['#3498db', '#2980b9']
                }

                if (this.hand_type == 'CONTROL') {
                    return ['#f39c12', '#e67e22']
                }

                return ['#3498db', 'transparent']
            }
        }
    }
</script>

<style>
    .reveal {
        height: 100vh!important;
        background: transparent!important;
        /* cursor: none; */
    }
    .reveal-viewport {
        background: transparent!important;
    }
    .reveal .slide-background {
        background-color: transparent!important;
    }
    #cursor {
        z-index: 999;
        position: absolute;
        height: 10px;
        width: 10px;
        border: 3px solid;
        border-radius: 100%;
        transition-duration: .1s;
    }
    #background {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        z-index: -2;
    }
   
</style>
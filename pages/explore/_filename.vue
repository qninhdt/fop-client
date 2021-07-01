<template>
    <div style="height: 100vh; width: 100vw">
        <span id="cursor" :style="{ borderColor: cursorColor[0], backgroundColor: cursorColor[1]}"></span>

        <img id="logo" width="40px" height="40px" class="rotating" src="/app/public/logo.png"/>
        <div class="reveal" v-html="text"></div>
        <canvas id="background"></canvas>
        <div class="square" id="square-1"></div>
        <div class="square" id="square-2"></div>
        <drawing :on="drawing_mode"></drawing>
    </div>
</template>

<script>

    import Reveal from 'reveal.js';
    import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
    import 'reveal.js/dist/reveal.css'
    import 'reveal.js/dist/theme/white.css'
    import HlPlugin from 'reveal.js/plugin/highlight/highlight';
    import RevealMath from 'reveal.js/plugin/math/math'
    import cpp from 'highlight.js/lib/languages/cpp';
    import pascal from 'highlight.js/lib/languages/ruby'
    import "highlight.js/styles/github.css"
    import Particles from "particlesjs"

    import File from "../../components/File.vue"
    import Drawing from "../../components/Drawing.vue"

    // hljs.registerLanguage('cpp', cpp);
    // hljs.registerLanguage('pas', pascal);

    var deck 

    export default {

        components: {
            File,
            Drawing
        },

        head: data => ({
            title: 'FocusOP ― ' + data.filename,
        }),
        data: () => ({
            text: "",
            hand_type: "",
            cursor: [0, 0],
            drawing_mode: false,
        }),
        async asyncData({ params }) {
            const filename = params.filename 
            return { filename }
        },

        async mounted() {
            deck = new Reveal({
                plugins: [ Markdown, HlPlugin, RevealMath ],
                math: {
                    mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
                    config: 'TeX-AMS_HTML-full',
                }
            })

            this.$socket.emit('get_fop', this.filename, async (text) => {
                this.text = text

                await this.$nextTick()
                await deck.initialize();

                Particles.init({
                    selector: '#background',
                    connectParticles: true,
                    color: ['#e056fd', '#ff9ff3'],
                    minDistance: 50,
                    maxParticles: 100,
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
                this.hand_type = hand.label;

                if (this.hand_type == "OK") {
                    this.drawing_mode = !this.drawing_mode
                }
            })

            
        },
        computed: {
            cursorColor() {
                if (this.hand_type == 'CONTROL') {
                    return ['#f39c12', '#f39c12']
                }
                return ['#e74c3c', '#e74c3c']
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=KoHo:wght@400&display=swap');
    html {
    }
    .reveal {
        color: #22a6b3;
        height: 100vh!important;
        background: transparent!important;
        cursor: none;
        font-size: 2rem!important;
        font-family: 'KoHo', sans-serif;
    }
    .reveal-viewport {
        background: transparent!important;
    }
    .reveal .slide-background {
        background-color: transparent!important;
    }
    #cursor {
        z-index: 1000;
        position: absolute;
        height: 10px;
        width: 10px;
        border: 3px solid;
        border-radius: 100%;
        /* transition-duration: .1s; */
    }
    #background {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        z-index: -2;
    }
    .MathJax_Display {
        margin: .5rem 0!important;
    }

    .reveal p {
        text-align: left;
        position: relative;
    }
    .reveal ul {
        display: block;
    }
    .reveal ol {
        display: block;
    }

    .reveal pre {
        padding: 0!important;
    }

    .reveal p::before {
        content: "";
        position: absolute;
        width: 1rem;
        height: 0.1rem;
        background: black;
        top: 1.5rem;
        left: -1.5rem;
    }

    #logo {
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    @keyframes rotating {
        from { transform: rotate(-360deg); }
        to { transform: rotate(0deg); }
    }

    .rotating {
        animation: rotating 5s linear infinite;
    }

    .reveal .hljs::-webkit-scrollbar {
        background: transparent;
        width: .3rem;
    }
        
    .reveal .hljs::-webkit-scrollbar-thumb {
        background: rgba(172, 172, 172, 0.2); 
        border-radius: .15rem;
    }

    .reveal .hljs::-webkit-scrollbar-thumb:hover {
        background: rgba(129, 129, 129, 0.2); 
    }

    .square {
        width: 2vw;
        height: 2vw;
        background-color: black;
        position: absolute;
        z-index: 9999;
    }

    #square-1 {
        top: 1vw;
        right: 1vw;
    }

    #square-2 {
        left: 1vw;
        bottom: 1vw;
    }
   
</style>
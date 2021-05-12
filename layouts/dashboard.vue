<template>
    <div class="is-full" id="container">
        <div class="columns is-12">
            <!-- SIDEBAR -->
            <div class="column is-3" style="padding-top: 5rem;">
                <side-bar />
            </div>
            <!-- MAIN -->
            <div class="column auto" id="main">
                <head-bar></head-bar>
                <Nuxt />
            </div>
        </div>
        <status-bar></status-bar>
        <div class="crystal">
            <div class="c1 rotating"></div>
            <div class="c2 _rotating"></div>
        </div>
        <canvas id="background"></canvas>
    </div>
</template>

<script>
    import 'normalize.css'
    import Particles from "particlesjs"

    export default {

        async mounted() {
            Particles.init({
                selector: '#background',
                connectParticles: true,
                color: ['#e056fd', '#ff9ff3'],
                minDistance: 150,
                maxParticles: 50,
            });
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400&display=swap');

    html, body {
        height: 100%;
        overflow: hidden;
        font-size: 2vh;
        font-family: 'Recursive', sans-serif;
        user-select: none;
     }

    #container {
        min-height: 100vh;
        height: 100vh;
    }

    #main {
        padding: 3rem 2rem;
        height: 100vh;
    }

    .fal {
        margin-right: .5rem;
    }

    ::selection {
        color: white;
        background: #967be0;
    }

    .crystal > div {
        position: absolute;
    }

    .c1 {
        bottom: 10rem;
        right: -8rem;
        width: 10rem;
        height: 10rem;
        transform: rotate(65deg);
        background: linear-gradient(60deg, #e156fd54, #8464db3d);
        z-index: -1;
        animation-duration: 25s!important;
    }

    .c2 {
        bottom: 10rem;
        left: 18rem;
        width: 8rem;
        height: 8rem;
        transform: rotate(65deg);
        background: linear-gradient(60deg, #e156fd10, #8464db15);
        z-index: -1;
        animation-duration: 20s!important;
    }

    #background {
        position:absolute; 
        display:block;
        top: 0;
        left: 0; 
        z-index: -2;
    }

    @keyframes rotating {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    @keyframes _rotating {
        from { transform: rotate(-360deg); }
        to { transform: rotate(0deg); }
    }

    .rotating {
        animation: rotating 5s linear infinite;
    }
    ._rotating {
        animation: rotating 5s linear infinite;
    }

</style>
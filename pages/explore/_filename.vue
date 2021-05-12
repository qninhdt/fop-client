<template>
    <div>{{filename}}</div>
</template>

<script>

    import Reveal from 'reveal.js';
    import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

    var deck 

    if (process.browser) {
        deck = new Reveal({
            plugins: [ Markdown ]
        })
        deck.initialize();
    }

    export default {
        async asyncData({ params }) {
            const filename = params.filename 
            return { filename }
        },
    }
</script>
<template>
    <div id="drawing" v-show="on">
        <div id="canvas"></div>
    </div>
</template>

<script>
var draw;

export default {
    props: ["on"],
    data: ()=>({
        rendered: false,
    }),
    watch: {
        async on(to, from) {
            if (to&&!this.rendered) {
                await this.$nextTick()  
                draw = new DrawingBoard.Board('canvas',{
                    background: false,
                    controlsPosition: "top center",
                    webStorage: false,
                    color : "#e74c3c",
                    size : 3,
                })
                this.rendered = true
            }
        }
    }
}
</script>

<style>
    #drawing {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
    }
    #canvas {
        height: 100%;
        width: 100%;
    }
</style>
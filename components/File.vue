<template>
    <nuxt-link :to="'/explore/' + filename">
        <div class="fop-file" style="background:url(http://www.builderwebsitedesigns.com/wp-content/uploads/2017/06/1-1.jpg);background-size: cover;">
            <div class="info">
                <h3>Lmao PII</h3>
            </div>
        </div>
    </nuxt-link>
</template>

<script>

    export default {
        props: ['filename'],
    }
</script>

<style>
    .fop-file {
        display: inline-block;
        position: relative;
        margin: 1rem;
        width: calc(15rem + 50px);
        height: calc(10rem + 30px);
        box-shadow: .5rem .6rem rgba(128, 128, 128, 0.2);
        border-bottom: 3px solid #e056fd;
    }

    .fop-file:before {
        content: "";
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        background: #ecf0f17e;
    }

    .fop-file .info {
        height: 30%;
        position: absolute;
        bottom: 0;
        width: 100%;
        background: whitesmoke;
        padding: .5rem;

    }

    .fop-file:hover .info {
        background-color: #e056fd;
        color: white;
        transition-duration: .3s;
    }

    .fop-file:hover {
        transform: translateY(.2rem);
        transition-duration: .5s;
        box-shadow: .4rem .5rem rgba(128, 128, 128, 0.2);
    }

</style>
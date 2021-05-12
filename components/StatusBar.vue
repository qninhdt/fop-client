<template>
   <nav id="status-bar">
       <a><i class="fal fa-plug"></i><span>ỔN ĐỊNH</span></a>
       <a><i class="fal fa-tv"></i><span>DESKTOP-12HD</span></a>
       <a><i class="fal fa-mobile-android"></i><span>SAMSUNG NOTE 8</span></a>
   </nav>
</template>

<script>

    export default {
        
    }

</script>

<style>

    #status-bar {
        position: absolute;
        bottom: 0;
        width: 100%;
        font-size: .5rem;
        background: linear-gradient(to right, #8464db, #e056fd, #e056fd);
        display: flex;
        padding: .3rem 4rem;
    }

    #status-bar a {
        color: white;
        margin-right: 2.5rem;
    }
    

</style>
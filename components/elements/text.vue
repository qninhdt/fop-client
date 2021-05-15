<template>
    <div class='text'><pre><slot/></pre></div>
</template>

<style>

    .text {
        border-radius: 2rem;
        font-family: 'Recursive', sans-serif;
        overflow-x: hidden;
        
    }

    .text pre{
        margin: auto;
        background: rgba(245, 245, 245, 0.3)!important;
        box-shadow: none!important;
        word-wrap: break-word;
        overflow-x: hidden;
    }

</style>
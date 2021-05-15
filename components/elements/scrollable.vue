<template>
    <div class="scrollable">
        <slot></slot>
    </div>
</template>

<style>
    .scrollable {
        margin-top: 2vh;
        max-height: 80vh;
        overflow-y: auto;
        padding: 2rem;
    }
    .scrollable::-webkit-scrollbar {
        background: transparent;
        width: .3rem;
    }
        
    .scrollable::-webkit-scrollbar-thumb {
        background: rgba(172, 172, 172, 0.2); 
        border-radius: .15rem;
    }

    .scrollable::-webkit-scrollbar-thumb:hover {
        background: rgba(129, 129, 129, 0.2); 
    }
</style>
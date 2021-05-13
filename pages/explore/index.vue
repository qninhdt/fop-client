<template>
    <div id="explore">
        <h4 class="subtitle is-4">
            <i class="fal fa-list-alt" style="color: rgba(128, 128, 128, 0.8);font-size:1.2rem;"></i>
            Danh sách bài thuyết trình
            <i id="explore-path" class="subtitle is-5"><i class="fal fa-folder"></i>D:/qninh/focusop/files/</i>
        </h4>
        <div class="is-full" id="files">
            <file v-for="(fop, i) in fops" :key="i" :filename="fop"></file>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'dashboard',
        head: {
            title: 'FocusOP ― Explore'
        },
        data: () => ({
            fops: []
        }),

        mounted() {
            this.$socket.emit('get_fops', {}, fops => this.fops = fops)
        }
    }
</script>

<style>

    #files {
        height: 85%;
        overflow-y: auto;
    }

    #explore {
        height: 100%;
        padding-bottom: 4rem;
    }

    #explore h4 {
        width: 75%;
        border-bottom: 1px solid #e056fd;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
    }

    #explore-path {
        margin-left: 1.5rem;
        font-size: 1rem;
        color: rgba(128, 128, 128, 0.5);
        font-family: Monospace;
    }

</style>
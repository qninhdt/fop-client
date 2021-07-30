<template>
    <div>
        <nav class="panel" id="device">
            <p class="panel-heading" style="color:#be2edd" >
                Lựa chọn thiết bị
            </p>
            <a class="panel-block" v-for="device,i in devices" :key="i" @click="connect(i)">
                <span class="panel-icon">
                   
                </span>
                 <img :src="'/app/public/' + icon(device)" :alt="device" class="device-icon">
                {{device}}
            </a>
        </nav>
    </div>
</template>

<script>

const IMAGES = {
    "Iriun Webcam" : "iriuncam.png",
    "DroidCam Source 2" : "droidcam.png",
    "DroidCam Source 3" : "droidcam.png",
    "EpocCam Camera" : "epoccam.png",
    "Default" : "camera.png"
}

export default {
    data: ()=>({
        devices: []
    }),
    mounted() {
        this.$socket.emit("get_devices", devices => {
            this.devices = devices
        })
    },
    methods: {
        icon(device) {
            if (device in IMAGES) return IMAGES[device];
            return IMAGES["Default"]
        },
        connect(index) {
            this.$socket.emit("set_device", index)
            document.location.href = "/app/explore"
        }
    }
}
</script>

<style>
    #device {
        text-align: center;
        margin: auto;
        width: 45%;
        margin-top: 10%;
    }
    #device a {
        padding: 1rem 30%;
    }
    .device-icon {
        height: 2rem;
        margin: 0 1rem;
    }
</style>
export default {
    router: {
        base: '/app'
    },
    components: true,
    modules: [
        'nuxt-buefy',
    ],
    css: [
        '~/assets/css/light.min.css',
        '~/assets/css/fontawesome.min.css'
    ],
    plugins: [
        '~/plugins/socket.js'
    ],
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
    },
    ssr: false
}
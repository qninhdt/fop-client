export default {
    router: {
        base: '/app'
    },
    modules: [
        'nuxt-buefy',
    ],
    css: [
        '~/assets/css/light.min.css',
        '~/assets/css/fontawesome.min.css'
    ],
    plugins: [
        '~/plugins/all.js'
    ],
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: '/public/favicon.ico' }]
    },
    ssr: false
}
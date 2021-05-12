export default {
    components: true,
    modules: [
        'nuxt-buefy',
    ],
    plugins: [
        'node_modules/vue-custom-element' 
    ],
    css: [
        '~/assets/css/light.min.css',
        '~/assets/css/fontawesome.min.css'
    ],
    head: {
        title: 'FocusOP - qninh',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
    },
    ssr: false
}
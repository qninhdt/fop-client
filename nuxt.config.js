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
        link: [
            { rel: 'icon', type: 'image/png', href: '/app/public/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.min.css' }
        ],
        script: [
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.min.js'
            }
        ]
    },
    ssr: false
}
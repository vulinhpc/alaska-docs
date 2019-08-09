module.exports = {
    title: 'Alaska Documentation',
    description: 'Wordpress hosting theme',
    themeConfig: {
        logo: '/assets/logo.png',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/getting-started'
            },
            {
                text: 'Themes',
                link: '/themes'
            },
        ],
        sidebar: [
            ['/guide/getting-started', 'Getting Started'],
            {
                title:'Installation',
                collapsable: false,
                children:[
                    '/guide/automatic',
                    '/guide/manual',
                    '/guide/install-plugin'
                ]
            }
        ]
    }
}
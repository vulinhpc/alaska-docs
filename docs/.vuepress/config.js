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
                    '/guide/installation/automatic',
                    '/guide/installation/manual',
                    '/guide/installation/install-plugin',
                    '/guide/installation/sample-data'
                ]
            },
            {
                title: 'After Installation',
                collapsable: false,
                children: [
                    '/guide/after_installation/adding_logo',
                    '/guide/after_installation/top_menu',
                    '/guide/after_installation/portfolio',
                    '/guide/after_installation/shortcode',
                    '/guide/after_installation/typography',
                    '/guide/after_installation/info_bar',
                    '/guide/after_installation/heading',
                    '/guide/after_installation/blog',
                    '/guide/after_installation/footer',
                ]
            },
            {
                title: 'WHMCS',
                collapsable: true,
                children: [
                    '/guide/whmcs/installation',
                ]
            },
            {
                title: 'Other Resources',
                collapsable: false,
                children: [
                    '/guide/other/credits',
                    '/guide/other/changelog',
                    '/guide/other/customize',
                    '/guide/other/faq',
                    '/guide/other/thankyou',
                ]
            },
        ]
    }
}
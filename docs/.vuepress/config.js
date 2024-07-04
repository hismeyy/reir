import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import {plumeTheme} from 'vuepress-theme-plume'

export default defineUserConfig({
    // 请不要忘记设置默认语言
    lang: 'zh-CN',
    title: 'REIR',
    description: 'Rewriting Everything in Rust',
    base: '/',

    head: [
        ['link', {rel: 'icon', href: '/images/favicon.ico'}],
    ],

    theme: plumeTheme({
        // more...
        logo: '/images/logo.png',
        hostname: 'http://reir.maxcosmos.top',
        navbar: [
            {text: '首页', link: '/'},
            {
                text: '学习',
                items: [
                    {text: '入门', link: '/学习/入门/'},
                    {text: '初级', link: '/学习/初级/'},
                    {text: '中级', link: '/学习/中级/'},
                    {text: '高级', link: '/学习/高级/'},
                    {text: '精通', link: '/学习/精通/'},
                    {text: '大佬', link: '/学习/大佬/'},
                ],
            },
            {text: '项目', link: '/项目/'},
            {text: '官网', link: 'https://www.rust-lang.org/'},
            {
                text: '其他教程',
                items: [
                    {text: 'Rust圣经', link: 'https://course.rs/about-book.html'},
                ],
            },
        ],
    }),


    bundler: viteBundler(),
})
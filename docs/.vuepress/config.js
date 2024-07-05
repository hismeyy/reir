import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import {plumeTheme} from 'vuepress-theme-plume'
import notes from "./notes";
import navbar from "./navbar";

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

        logo: '/images/logo.png',
        hostname: 'http://reir.maxcosmos.top',
        docsRepo: 'https://github.com/hismeyy/reir', // 文档仓库地址
        docsDir: 'docs',
        contributors: false,

        notes,
        navbar,
    }),


    bundler: viteBundler(),
})

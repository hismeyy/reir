import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
    {text: '首页', link: '/'},
    {
        text: '学习',
        items: [
            {text: '入门', link: '/study-beginner/'},
            {text: '初级', link: '/study-intermediate/'},
            {text: '中级', link: '/study-advanced/'},
            {text: '高级', link: '/study-expert/'},
            {text: '精通', link: '/study-mastery/'},
            {text: '大佬', link: '/study-Master/'},
        ],
    },
    {text: '项目', link: '/项目/'},
    {text: '官网', link: 'https://www.rust-lang.org/'},
    {
        text: '其他教程',
        items: [
            {text: 'Rust官方文档', link: 'https://rustwiki.org/'},
            {text: 'Rust圣经', link: 'https://course.rs/about-book.html'},
        ],
    },
])

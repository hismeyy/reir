import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
    link: '/study-beginner/',
    dir: '学习',
    sidebar: [
        {
            dir: '入门',
            items: ['1_Rust环境安装', '2_Rust简介'],
        },
    ]
})

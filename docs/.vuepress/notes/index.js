import {definePlumeNotesConfig} from 'vuepress-theme-plume'
import beginner from "./beginner";

export default definePlumeNotesConfig({
  link: '/',
  dir: 'notes',
  notes: [
      beginner
  ]
})

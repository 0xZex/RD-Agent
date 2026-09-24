import { createApp } from 'vue'
import './common/reset.css'
// import './common/code-theme.css'
import './style.css'
// import 'prismjs/themes/prism.css';
import './common/py-theme.css'
import App from './App.vue'
import router from './router/index'
import 'virtual:svg-icons-register'
import SvgIcon from './components/svgIcon.vue'
import 'element-plus/dist/index.css'
import { translate } from './i18n'

const app = createApp(App);
app.component('SvgIcon', SvgIcon)
app.config.globalProperties.$t = translate
app.use(router)
app.mount('#app')
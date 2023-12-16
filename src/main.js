import { createApp } from 'vue'


import App from './App.vue'
import vuerouter from './vuerouter'

// 引入 element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入 bootstrap
import * as bootstrap from 'bootstrap'
import "bootstrap/scss/bootstrap.scss"
import axios from 'axios';



axios.defaults.baseURL = 'http://localhost:8080'


const app = createApp(App);

//5.將vue-router設定到vue APP內
app.use(vuerouter.router);
app.use(ElementPlus);
app.use(bootstrap);


app.mount('#app');


// 2. import 元件
import {createRouter,createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import Faq from './pages/Faq.vue'
import Prod from './pages/Prod.vue'
import List from './pages/List.vue'
import Signup from './pages/Signup.vue'
import Profile from './pages/Profile.vue'
import DemoVue from './pages/DemoVue.vue'
import ChatRoomFaqV3 from './components/ChatRoomFaqV3.vue'
import Contact from './components/Contact.vue'
import Team from './components/Team.vue'
import Doc from './pages/Doc.vue'



// 3. 跳轉元件畫面
const routes = [
        { 
                path: '/', 
                component:Login, 
        },
        { 
                path: '/faq.html', 
                component: Faq,
        },
        { 
                path: '/prod.html', 
                component: Prod,
        },
        { 
                path: '/list.html', 
                component: List,
        },
        { 
                path: '/signup.html', 
                component: Signup,
        },

        { 
                path: '/profile.html', 
                component: Profile,
        },
        { 
                path: '/demo.html', 
                component: DemoVue,
        },
        { 
                path: '/doc.html', 
                component: Doc,
        },
        // 以下為開發階段測試使用

        { 
                path: '/chat.html', 
                component:ChatRoomFaqV3,
        },
        { 
                path: '/team.html', 
                component:Team,
        },
        { 
                path: '/contact.html', 
                component:Contact,
        },

]


// 4. 建立 vue-router 物件
const router = createRouter({
        history:createWebHistory(),
        routes, 
})

// 5. 將router物件export給main.js使用

export default {
        router
}
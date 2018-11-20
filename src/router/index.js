import Vue from 'vue'
import Router from 'vue-router'
import NavBar from '@/components/Navbar'
import NewSong from '@/views/new-song/new-song'
import Rank from '@/views/rank/rank'
import Plist from '@/views/p-list/p-list'
import Singer from '@/views/singer/singer'
import Personal from '@/views/personal/personal'
Vue.use(Router)
let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/newsong',
            name: 'NewSong',
            components: {
                nav: NavBar,
                default: NewSong
            }
        },
        {
            path: '/rank',
            // name:'Rank',
            components:{
              nav:NavBar,
              default:Rank
            }
          },
          {
            path: '/plist',
            name:'Plist',
            components:{
              nav:NavBar,
              default:Plist
            }
          },
          {
            path: '/singer',
            name:'Singer',
            components:{
              nav:NavBar,
              default:Singer
            }
          },
          {
            path: '/personal',
            name:'Personal',
            components:{
              nav:NavBar,
              default:Personal
            }
          },
          {
              path:"/",
              redirect:"newsong"
          }
          
    ]
})
export default router

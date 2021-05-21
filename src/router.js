import Vue from 'vue';
import Router from 'vue-router';
// import WorksGrid from './components/WorksGrid'

import Games from './components/WorksComponents/Games'
import Web from './components/WorksComponents/Web'
import Mobile from './components/WorksComponents/Mobile'
import Desktop from './components/WorksComponents/Desktop'
import work from "./util/worksArray";

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        
    {
        path: '/web',
        component: Web,
       
    }, {
        path: '/mobile',
        component: Mobile
    },
    {
        path: '/games',
        component: Games
    },
    {
        path: '/desktop',
        component: Desktop
    }


    ]
    
}
)

import { createRouter, createWebHashHistory, RouteParams } from 'vue-router'
import Index from '@/pages/Index.vue'
import Loading from '@/pages/Loading.vue'
import Game from '@/pages/Game.vue'

export type AppRouteNames = '/' |
  'loading' |
  'game'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: '/', component: Index },
        { path: '/loading', name: 'loading', component: Loading },
        { path: '/game', name: 'game', component: Game }
    ]
});

export function routerPush (name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
    if(params !== undefined) {
        return router.push({
            name,
            params,
        })
    }else {
        return router.push({name})
    }
}
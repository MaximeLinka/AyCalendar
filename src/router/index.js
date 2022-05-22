import {createRouter, createWebHistory} from 'vue-router'

import CalendarView from '../views/CalendarView'
import HomeView from '../views/HomeView'
import StatsView from '../views/StatsView'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: CalendarView,
    },
    {
        path: '/stats',
        name: 'Stats',
        component: StatsView,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
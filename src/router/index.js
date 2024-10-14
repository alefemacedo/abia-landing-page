import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import Cases from "@/views/Cases";
import StartDev from '@/views/Cases/StartDev';
import TradePlus from '@/views/Cases/TradePlus';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cases",
    name: "Cases",
    component: Cases,
    redirect: '/cases/start-dev',
    children: [
        {
            path: 'start-dev',
            name: 'Cases.StartDev',
            component: StartDev
        },
        {
            path: 'trade-plus',
            name: 'Cases.TradePlus',
            component: TradePlus
        }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
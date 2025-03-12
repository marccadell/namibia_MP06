import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import RopaPage from '@/components/RopaPage.vue';
import CalzadoPage from '@/components/CalzadoPage.vue';
import ComplementosPage from '@/components/ComplementosPage.vue';
import Contacto from '@/components/Contacto.vue';
import Checkout from '@/components/checkout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/ropa', component: RopaPage },
  { path: '/calzado', component: CalzadoPage },
  { path: '/complementos', component: ComplementosPage },
  { path: '/contacto', component: Contacto },
  { path: '/checkout', component: Checkout, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

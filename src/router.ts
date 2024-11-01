import { createWebHistory, createRouter } from "vue-router";

import Product from "./components/Product.vue";
import Contact from "./components/Contact.vue";
import Review from "./components/Review.vue";

const routes = [
  { path: "/", component: Product },
  { path: "/contacto", component: Contact },
  { path: "/reseña", component: Review },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

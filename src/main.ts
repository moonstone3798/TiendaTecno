import "./assets/main.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";
import router from "./router";

const pinia = createPinia();

const app = createApp(App);
app.use(router).use(pinia).mount("#app");

const headerApp = createApp(Header);
headerApp.use(router);
headerApp.mount("#header");

const footerApp = createApp(Footer);
footerApp.use(router);
footerApp.mount("#footer");

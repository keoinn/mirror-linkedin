import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";

// SVG的處理 - vite-plugin-svg-icons
import "virtual:svg-icons-register";

//Router 自動生成 - vite-plugin-pages + vite-plugin-vue-layouts
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

//全域資料管理  Pinia
import { createPinia } from "pinia";

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");

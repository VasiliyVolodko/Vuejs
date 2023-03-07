import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";
import VIntersection from "./directives/VIntersection";

const app = createApp(App);

app.directive("intersection", VIntersection);

app.use(router).use(store, key).mount("#app");

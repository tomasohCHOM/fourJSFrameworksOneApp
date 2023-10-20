import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaBars, IoCloseOutline } from "oh-vue-icons/icons";

addIcons(FaBars, IoCloseOutline);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");

import { createApp } from "vue";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

import "./index.scss";
import store from "./store";
import SWApp from "./SWApp.vue";

const app = createApp(SWApp);
app.use(store).use(mdiVue, {
	icons: mdijs,
});
app.mount("#root");

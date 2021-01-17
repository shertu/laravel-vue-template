import Vue from "vue";
import App from "./component/App/App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
Vue.config.productionTip = false;

Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: createElement => createElement(App)
});

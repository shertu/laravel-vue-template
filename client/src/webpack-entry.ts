import Vue from 'vue';
import App from './component/App/App.vue';
import 'ant-design-vue/dist/antd.less';

// https://github.com/vueComponent/ant-design-vue/blob/master/components/index.js
// You can ignore the error about Space being an invalid import.
import {Alert, Avatar, Button, Layout, List, Space} from 'ant-design-vue';
Vue.use(Alert);
Vue.use(Avatar);
Vue.use(Button);
Vue.use(Layout);
Vue.use(List);
Vue.use(Space);

Vue.config.productionTip = false;

// Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (createElement) => createElement(App),
});

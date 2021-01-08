import Vue from 'vue';
import App from './components/App/App.vue';

//Added to clear npx depcheck
//import WebpackCli from 'webpack-cli';
//import VueTemplateCompiler from 'vue-template-compiler';

new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
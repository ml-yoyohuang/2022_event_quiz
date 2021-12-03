import Vue, { CreateElement } from 'vue';
import './css/index.styl';
import App from '@/components/App';
import gaInit from '@/utils/ga';
import vuePlugins from '@/utils/vue-plugins';
import init from '@/utils/init';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 加密字串，解密長的是這樣：debug=medialand，在網址後方加入 ?debug=medialand, 就可以開啟 devtools , 方便 debug
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line
  var debugKey = eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6(){9 a=6(3,c){4 3+e.f(c>>1)};4[0,8,2,b,2,d,0,5,7,g,h,i,j,5,0].k().l(a,\'\')})();',22,22,'200||194|p|return|202|function|218|220|var||216||210|String|fromCharCode|122|206|234|196|reverse|reduce'.split('|'),0,{}))
  Vue.config.devtools = window.location.href.indexOf(debugKey) !== -1;
  // console.log(debugKey, window.location.href.indexOf(debugKey) !== -1);
}
Vue.use(vuePlugins);
init();
gaInit();

new Vue({
  router,
  store,
  render(h:CreateElement) {
    return h(App);
  },
}).$mount('#app');

import { numberWithCommas } from '@/utils/format';

export default {
  install(Vue) {
    Vue.filter('numberWithCommas', (value:string|number) => numberWithCommas(value));
  },
};

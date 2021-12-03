
import { catchDecoratorStore } from '@/utils/decorators/showLoading';
import vueFilters from './vue-filters';

export default {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    Vue.use(vueFilters);

    catchDecoratorStore.handler = (message:string) => {
      // TODO
      console.error(message);
    };

    Vue.component('DebugComponent', require('@/components/DebugComponent').default);
  },
};

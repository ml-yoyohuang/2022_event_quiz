// import { addParameters } from '@storybook/vue';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';
import Vue from 'vue';

import '../../src/css/index.styl';

const logMixin = {
  methods: {
    log(val:string) {
      action(this.name || '')(Array.isArray(val) ? val.join(',').toString() : val);
      console.log(val);
    },
  },
};
Vue.mixin(logMixin);

/* addParameters({
  docs: {
    // container: DocsContainer,
    // page: DocsPage,
  },
}); */

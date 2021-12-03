<script>
/* testing library demo 用 */
interface Data {
  count: number;
}
interface Props {
  defaultCount: number;
}
export default {
  props: {
    defaultCount: {
      type: Number,
      default: 0,
    },
  },
  data: (vm:Props):Data => ({
    count: vm.defaultCount,
  }),
  // TODO
  computed: {
    displayCount() {
      return this.count * 2;
    },
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>

<template lang="pug">
  section(data-name='Counter.vue')
    p Times clicked:
      //- TODO
      //- span(data-testid='count') {{ displayCount }}
      span(data-testid='count') {{ count }}
    button.btn.btn-info(data-testid='button' @click='increment') increment
</template>

<script>
// 這是 storybook demo 用的
interface Data {

}
export default {
  name: 'Button',
  components: {
  },
  props: {
    color: {
      type: String,
      default: '#ff0000',
    },
    label: {
      type: String,
      default: '9527',
    },
  },
  data: ():Data => ({
  }),
  computed: {
    style() {
      return {
        color: this.color,
      };
    },
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  },
};
</script>

<template lang="pug">
.button(v-on="$listeners" :style="style")
  span {{label}}
</template>

<style lang="stylus">
</style>

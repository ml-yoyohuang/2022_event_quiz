<script>
import Vuex from 'vuex';

interface Data {

}
export default {
  components: {
  },
  props: {},
  data: (): Data => ({
  }),
  computed: {
    ...Vuex.mapState([]),
    ...Vuex.mapGetters([]),
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    ...Vuex.mapMutations([]),
    ...Vuex.mapActions([]),
  },
};
</script>

<template lang="pug">
.screen
  h1 screen
</template>

<style lang="stylus">
.screen
  // display: none
</style>
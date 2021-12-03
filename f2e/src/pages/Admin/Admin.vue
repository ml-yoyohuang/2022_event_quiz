<script>
import Vuex from 'vuex';

interface Data {

}
export default {
  components: {
  },
  props: {},
  data: (): Data => ({
    status: 0,
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
    changeStatus(newid) {
      const url = 'https://script.google.com/macros/s/AKfycbwg2oc6Zbxbj4Xb2cEMx-UY1RdIy5HN_A6obFrF_Bs_Wu4h3cw/exec';
      const postData = {
        newstatus: newid,
      };
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

      axios.get(url, {
        params: postData,
      })
        .then((res) => {
          console.log(res);
          if (res.data[0]) {
            this.status = res.data[0][1];
          }
        });
    },
  },
};
</script>

<template lang="pug">
.admin
  .container.text-center.py-4
    h1 admin
    .p-4
      button.button(@click="changeStatus(1)") 開始第一題
</template>

<style lang="stylus">
.admin
  // display: none
</style>

<script>
import Vuex from 'vuex';
import workerTimer from '@/utils/worker';

interface Data {

}
export default {
  components: {
  },
  props: {},
  data: (): Data => ({
    status: -1,
    interval: undefined,
    list: undefined,
  }),
  computed: {
    ...Vuex.mapState([]),
    ...Vuex.mapGetters([]),
    statusName() {
      if (this.status == 0) {
        return '待機畫面';
      }
      if (this.status == 1) {
        return '第一題: 請問1+1=?';
      }
      if (this.status == 2) {
        return '第一題:名單';
      }
      return this.status;
    },
  },
  mounted() {
    this.interval = workerTimer.setInterval(() => {
      this.fetchStatus();
    }, 1000);
  },
  beforeDestroy() {
  },
  methods: {
    ...Vuex.mapMutations([]),
    ...Vuex.mapActions([]),
    fetchStatus() {
      const url = 'https://script.google.com/macros/s/AKfycbwg2oc6Zbxbj4Xb2cEMx-UY1RdIy5HN_A6obFrF_Bs_Wu4h3cw/exec';
      const postData = {
        type: 'list',
        // id: this.id,
        // ans: this.ans1,
      };
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

      axios.get(url, {
        params: postData,
      })
        .then((res) => {
          console.log(res);
          if (res.data.data) {
            this.status = res.data.data[0][1];
            this.list = res.data.list;
          }
        });
    },
  },
};
</script>

<template lang="pug">
.screen
  h1 screen
  template(v-if="status>-1")
    .h1 {{statusName}}
  template(v-if="status==2")
    .h1 答對:
    .row(v-for="p in list" v-if="p[1]>0")
      .col-6 {{p[0]}}
      //- .col-6 {{p[1]}}
    .h1 答錯:
    .row(v-for="p in list" v-if="p[1]==0")
      .col-6 {{p[0]}}
      //- .col-6 {{p[1]}}
</template>

<style lang="stylus">
.screen
  // display: none
</style>

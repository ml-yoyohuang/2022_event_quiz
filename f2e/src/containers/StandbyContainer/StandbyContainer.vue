<script>
import Vuex from 'vuex';
import workerTimer from '@/utils/worker';

interface Data {

}
export default {
  components: {
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: (): Data => ({
    interval: undefined,
    status: -1,
    ans1: -1,
  }),
  computed: {
    ...Vuex.mapState([]),
    ...Vuex.mapGetters([]),
    statusName() {
      if (this.status == 0) {
        return '待機畫面';
      }
      if (this.status == 1) {
        return '第一題';
      }
      return this.status;
    },
  },
  watch: {
    // status() {
    //   if (this.status == 2) {
    //   }
    // },
  },
  mounted() {
    // this.fetchStatus();
    this.interval = workerTimer.setInterval(() => {
      this.fetchStatus();
    }, 1000);
    // workerTimer.clearInterval(interval);
  },
  beforeDestroy() {
  },
  methods: {
    ...Vuex.mapMutations([]),
    ...Vuex.mapActions([]),
    fetchStatus() {
      const url = 'https://script.google.com/macros/s/AKfycbwg2oc6Zbxbj4Xb2cEMx-UY1RdIy5HN_A6obFrF_Bs_Wu4h3cw/exec';
      const postData = {
        id: this.id,
        ans: this.ans1,
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
    sendAns() {},
  },
};
</script>

<template lang="pug">
.standby-container
  h1.h1 Welcome, {{id}}
  template(v-if="status>-1")
    .h1 {{statusName}}
  .row(v-if="status==1")
    .col-6
      input(type="radio" v-model="ans1" value="1" name="q1")
      |Y
    .col-6
      input(type="radio" v-model="ans1" value="0" name="q1")
      |N
  template(v-if="status==2")
    h1(v-if="ans1===1") 答對了
    h1(v-else) 答錯了
</template>

<style lang="stylus">
.standby-container
  // display: none
</style>

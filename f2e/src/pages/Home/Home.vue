<script>
import StandbyContainer from '@/containers/StandbyContainer';

export default {
  name: 'Home',
  components: {
    StandbyContainer,
  },
  data: (): Data => ({
    message: '',
    userid: 'cryptoSalmon9487',
    isLogined: false,
    myid: 'cryptoSalmon9487',
  }),
  methods: {
    doLogin() {
      if (this.myid === this.userid) {
        this.isLogined = true;
      } else {
        this.message = '帳號錯誤';
      }
    },
  },
};
</script>

<template lang="pug">
.page-home
  .container.text-center.py-4
    template(v-if="isLogined")
      StandbyContainer(:id="myid")
    template(v-else)
      h1.h1 Welcome
      .p-4.m-4.bg-light
        input.border-bottom.mr-2(type="text" placeholder="enter your username" v-model="myid")
        button.button(@click="doLogin") OK
      .p-2 {{message}}
</template>

<style lang="stylus">
</style>

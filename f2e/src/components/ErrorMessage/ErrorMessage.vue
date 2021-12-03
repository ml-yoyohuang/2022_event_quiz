<script>
type Data = {
  maxHeight: number;
  prevMessage : string;
}
export default {
  props: {
    error: Boolean,
    message: {
      type: String,
      default: '',
    },
  },
  data: ():Data => ({
    maxHeight: 0,
    prevMessage: '',
  }),
  computed: {
    displayMessage():string {
      return this.error ? this.message : this.prevMessage;
    },
    style() {
      return {
        'max-height': `${this.maxHeight}px`,
      };
    },
  },
  watch: {
    error(val:boolean) {
      this.$nextTick(() => {
        this.maxHeight = val ? this.$el.scrollHeight : 0;
      });
    },
    message(val:string, prev:string) {
      this.prevMessage = prev;
    },
  },
};
</script>

<template lang="pug">
.error-message-component(:style="style") {{displayMessage}}
</template>


<style lang="stylus" scoped>
.error-message-component
  overflow hidden
  color c-red
  max-height 0
  font-size 14px
  padding-left 14px
  line-height 20px
  transition max-height 0.35s
  background-image embedurl('./exclamation-mark.svg')
  background-size 12px;
  background-repeat no-repeat
  background-position left center
</style>

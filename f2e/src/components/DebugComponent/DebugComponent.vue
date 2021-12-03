<script>
/**
 * 本機開發用，點了可以直接開 vsocde
 */
export default {
  name: 'DebugComponent',
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickHandler() {
      window.fetch(`/__open-in-editor?file=${this.path}`);
    },
  },
  render(createElement) {
    if (process.env.NODE_ENV !== 'development') {
      return null;
    }
    const fileName:string = this.path.split('/').pop();
    return createElement('div',
      {
        class: 'debug-component',
        on: {
          click: this.clickHandler,
        },
      },
      [
        createElement('h1', fileName),
      ]);
  },
};
</script>


<style lang="stylus" scoped>
.debug-component
  cursor pointer
  background #c0392b
  padding 10px
  h1
    color white
    font-size 20px
</style>

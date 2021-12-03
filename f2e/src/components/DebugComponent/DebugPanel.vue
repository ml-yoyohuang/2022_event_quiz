<script>
export default {
  functional: true,
  render(h, { props, children }) {
    if (process.env.APP_ENV === 'production') {
      return null;
    }
    return (
      <div class="debug-panel">
        <input type="checkbox" />
        <div class="debug-panel-content">
          {
            props.value && <textarea>{JSON.stringify(props.value, null, 2)}</textarea>
          }
          {children}
        </div>
      </div>
    );
  },
};
</script>

<style lang="stylus">
.debug-panel
  position fixed
  width 280px
  top 0
  right 0
  z-index 999
  border 1px solid red
  > *
    font-size 12px
  .debug-panel-content
    display none
  input
    &:checked ~ .debug-panel-content
      display block
  textarea
    height 90vh
    font-size 13px
    background-color alpha(white, 0.8)
</style>

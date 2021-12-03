<script>
/* eslint max-len:0 */
/* guide.html 裡有用到 */
interface Data {
  selectIdx: number;
}
export default {
  name: 'GuideResponseDemo',
  data: ():Data => ({
    selectIdx: 0,
  }),
  watch: {
    selectIdx(val:number) {
      this.$emit('change', val);
    },
  },
};
</script>

<template lang="pug">
//- template 是 copy tailwindcss -->
.guide-response-demo
  .d-flex.align-items-end.justify-content-center.mb-2.bg-white.space-x-4
    span.inline-block.text-center.cursor-pointer.select-none.text-gray.guide-response-item(:class="{'is-active': selectIdx===0}" @click='selectIdx=0')
      include ./icons/all.svg
      p.text-xs all
    span.inline-block.text-center.cursor-pointer.select-none.text-gray.guide-response-item(:class="{'is-active': selectIdx===1}" @click='selectIdx=1')
      include ./icons/sm.svg
      p.text-xs sm
    span.inline-block.text-center.cursor-pointer.select-none.text-gray.guide-response-item(:class="{'is-active': selectIdx===2}" @click='selectIdx=2')
      include ./icons/md.svg
      p.text-xs md
    span.inline-block.text-center.cursor-pointer.select-none.text-gray.guide-response-item(:class="{'is-active': selectIdx===3}" @click='selectIdx=3')
      include ./icons/lg.svg
      p.text-xs lg
    span.inline-block.text-center.cursor-pointer.select-none.text-gray.guide-response-item(:class="{'is-active': selectIdx===4}" @click='selectIdx=4')
      include ./icons/xl.svg
      p.text-xs xl
  slot(:selectIdx="selectIdx")
</template>

<style lang="stylus" scoped>
.guide-response-item
  opacity 0.4
  &.is-active
    opacity 1
    pointer-events none
</style>

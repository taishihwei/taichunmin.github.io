<template lang="pug">
  .container-youtube
    iframe.component-youtube(:src="cpuSrc", frameborder="0", allow="autoplay; encrypted-media", allowfullscreen)
</template>

<script>
import _ from 'lodash'

export default {
  props: ['src', 'start'],
  computed: {
    cpuSrc () {
      let youtubeId = /([a-zA-Z0-9_-]{11})/.exec(this.src)[1]
      let queries = []
      
      let start = _.parseInt(this.start)
      if (start > 0) queries.push('start=' + start)

      return `https://www.youtube.com/embed/${youtubeId}?${_.join(queries, '&')}`
    }
  }
}
</script>

<style lang="sass" scoped>
.container-youtube
  position: relative
  width: 100%
  padding-top: calc(9 / 16 * 100%)
  > iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>


<template lang="pug">
  iframe.component-youtube(src="", width="560", height="", frameborder="0", allow="autoplay; encrypted-media", allowfullscreen)
  // <iframe width="560" height="315" :src="cpuSrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['src', 'start'],
  computed: {
    cpuSrc () {
      let youtubeId = /([a-zA-Z0-9_-]{11})/.exec(this.src)
      let queries = []
      
      let start = _.parseInt(this.start)
      if (start > 0) queries.push('start=' + start)

      return `https://www.youtube.com/embed/${youtubeId}?${_.join(queries, '&')}`
    }
  }
}
</script>

<style lang="sass" scoped>

</style>


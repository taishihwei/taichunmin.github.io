<template lang="pug">
  iframe#iframe-experiences(:src="'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=' + data.spreadsheets + '&font=OpenSans-GentiumBook&lang=zh-tw&start_at_end=true&initial_zoom=0&hash_bookmark=true'", width="100%", webkitallowfullscreen="", mozallowfullscreen="", allowfullscreen="", frameborder="0")
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="sass">
#iframe-experiences
  height: calc(99vh - 60px)
</style>

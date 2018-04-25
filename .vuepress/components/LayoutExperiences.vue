<template lang="pug">
  iframe(:src="'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=' + data.spreadsheets + '&font=Default&lang=en&initial_zoom=2'", width="100%", height="100%", webkitallowfullscreen="", mozallowfullscreen="", allowfullscreen="", frameborder="0")
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
#container-experiences
  height: 99vh
</style>

<template lang="pug">
  main(:class="`my-3 container${$frontmatter.fluid ? '-fluid' : ''}`")
    slot(name="top")
    Content
    PageNav(v-bind="{ sidebarItems }")
    slot(name="bottom")
</template>

<style lang="sass">
main.container
  img
    max-width: 100%
    border: 1px solid black
    &.screenshot-mobile
      display: block
      margin: 0 auto
      max-width: 480px
</style>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

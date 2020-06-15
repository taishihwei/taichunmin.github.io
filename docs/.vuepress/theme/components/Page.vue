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
    border: 1px solid black
    display: block
    margin: 0 auto
    max-width: 100%
  h1, h2
    margin-top: 1rem
  h3, h4, h5, h6
    margin-top: .5rem
</style>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

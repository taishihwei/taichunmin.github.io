<template lang="pug">
  main(:class="`page my-3 container${$page.frontmatter.fluid ? '-fluid' : ''}`")
    slot(name="top")
    Content
    PageNav(v-bind="{ sidebarItems }")
    slot(name="bottom")
</template>

<style lang="sass">
main.page
  img
    max-width: 100%
</style>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

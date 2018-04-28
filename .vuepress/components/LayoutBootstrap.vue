<template lang="pug">
  .container.layout-bootstrap
    Content
</template>

<script>
import jQuery from 'jquery'
import _ from 'lodash'

export default {
  mounted () {
    window.$ = window.jQuery = jQuery
    window._ = _
    import('bootstrap')
  }
}
</script>

<style lang="sass">
body
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, "文泉驛正黑", "WenQuanYi Zen Hei", "儷黑 Pro", "LiHei Pro", "微軟正黑體", "Microsoft JhengHei", "標楷體", DFKai-SB, sans-serif
.layout-bootstrap
  margin-top: 1rem
</style>

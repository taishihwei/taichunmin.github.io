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

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style lang="sass">
.layout-bootstrap
  margin-top: 1rem
</style>

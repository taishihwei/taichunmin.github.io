<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link :to="$localePath" class="navbar-brand">
        <img class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)">
        <span class="site-name"
          v-if="$siteTitle"
          :class="{ 'd-lg-inline-block': $site.themeConfig.logo }">
          {{ $siteTitle }}
        </span>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navbar">
        <NavLinks/>
        <form class="form-inline mt-2 mt-md-0" submit.prevent>
          <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
          <SearchBox v-else-if="$site.themeConfig.search !== false"/>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'
import $ from 'jquery'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },
  mounted () {
    let $navbar = $(this.$refs.navbar)
    $navbar.on('click', '.nav-item', function () {
      console.log('click .nav-item')
      $navbar.removeClass('show')
    })
  },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
</style>

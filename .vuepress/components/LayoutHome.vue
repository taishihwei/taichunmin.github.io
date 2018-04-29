<template>
  <div class="home">
    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
      <h1>{{ data.heroText || $site.title || 'Hello' }}</h1>
      <p class="description">
        {{ data.tagline || $site.description || 'Hello world!' }}
      </p>
    </div>
    <nav class="btn-toolbar justify-content-center" role="toolbar">
      <div class="btn-group mr-2 mb-2" role="group" v-if="_.get(data, 'socials.length')">
        <a v-for="social in data.socials" :href="social.href" target="_blank" class="btn btn-link btn-social"><i class="fa" :class="'fa-' + social.icon"></i></a>
      </div>
      <div class="btn-group mb-2" role="group">
        <a :href="$withBase(data.actionLink)" class="btn btn-primary btn-lg">{{ data.actionText }}</a>
      </div>
    </nav>
    
    <Content/>
    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import NavLink from '@default-theme/NavLink.vue'
export default {
  components: { NavLink },
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="sass">
.home
  margin-top: 0rem
  padding: 0 2rem
.btn.btn-social
  .fa
    position: relative
    margin: -6px -3px
    font-size: 40px
    top: 3px
</style>

<template>
  <div class="home">
    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
      <h1>{{ data.heroText || $site.title || 'Hello' }}</h1>
      <p class="description">
        {{ data.tagline || $site.description || 'Welcome to your VuePress site' }}
      </p>
    </div>
    <nav class="socials" v-if="data.socials && data.socials.length">
      <div class="social" v-for="social in data.socials">
        <a :href="social.href" target="_blank"><i class="fa fa-2x fa-fw" :class="'fa-' + social.icon"></i></a>
      </div>
      <NavLink class="action-button" :item="actionLink"/>
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
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
$accentColor = #3eaf7c
@import '~font-awesome/css/font-awesome.css'
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, "文泉驛正黑", "WenQuanYi Zen Hei", "儷黑 Pro", "LiHei Pro", "微軟正黑體", "Microsoft JhengHei", "標楷體", DFKai-SB, sans-serif
.home
  padding 0 2rem
.socials
  display flex
  flex-direction row
  flex-wrap wrap
  justify-content center
  align-items center
  .social
    height 32px
    margin 0 15px
    &>a:hover
      color lighten($accentColor, 10%)
  .action-button
    background-color $accentColor
    border-bottom 1px solid darken($accentColor, 10%)
    border-radius 4px
    box-sizing border-box
    color #fff
    display inline-block
    font-size 1.2rem
    margin 0 15px
    padding 0.8rem 1.6rem
    transition background-color .1s ease
    &:hover
      background-color lighten($accentColor, 10%)
</style>

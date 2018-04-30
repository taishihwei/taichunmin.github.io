<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link)"
    :exact="link === '/'"
    active-class="active"
    exact-active-class="active">
    <i v-if="item.icon" class="fa fa-fw" :class="'fa-' + item.icon"></i> 
    {{ item.text }}
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link"
    :target="isMailto(link) ? null : '_blank'"
    :rel="isMailto(link) ? null : 'noopener noreferrer'">
    <i v-if="item.icon" class="fa fa-fw" :class="'fa-' + item.icon"></i>
    {{ item.text }}
  </a>
</template>

<script>
import { isExternal, isMailto, ensureExt } from './util'

export default {
  props: {
    item: {
      required: true
    }
  },
  computed: {
    link() {
      return ensureExt(this.item.link)
    }
  },
  methods: {
    isExternal,
    isMailto
  }
}
</script>

<template lang="pug">
.container.layout-posts
  Content
  .card.mt-3.mb-3
    .card-header.bg-secondary.text-white #[i.fa.fa-fw.fa-file-text] 文章列表
    ul.list-group.list-group-flush
      a.list-group-item.list-group-item-action.flex-column.align-items-start(v-for="post in posts", :key="post.path", :href="post.path")
        .d-flex.w-100.justify-content-between
          h5.mb-1 {{ post.title }}
          small {{ post.date.format('Y/MM/DD') }}
        .post-badge(v-if="_.has(post, 'frontmatter.tags')")
          span.badge.badge-info.mr-1(v-for="tag in _.get(post, 'frontmatter.tags')") {{ tag }}
        .post-badge-empty(v-else) &nbsp;
</template>

<script>
import _ from 'lodash'
import moment from './lib/moment'

export default {
  methods: {
    cget (post, path, defaultVal) {
      if (_.isArray(path)) path = path.join('.')
      return _.get(post, `frontmatter.card.${path}`, defaultVal)
    },
    chas (post, path) {
      if (_.isArray(path)) path = path.join('.')
      return _.has(post, `frontmatter.card.${path}`)
    }
  },
  computed: {
    posts () {
      // generate this.posts
      let posts = _.get(this, '$site.pages', [])
      let blogRegex = /^\/blog\/(\d{4}-\d{1,2}-\d{1,2})-(.*)\.html/i
      posts = _.filter(posts, post => {
        if (!blogRegex.test(post.path)) return false
        // date
        post.date = _.has(post, 'frontmatter.date') ? moment(post.frontmatter.date) : moment(post.path.match(blogRegex)[1])
        return true
      })
      return _.orderBy(posts, ['date', 'path'], ['desc', 'asc'])
    }
  }
}
</script>

<style lang="sass" scoped>

</style>


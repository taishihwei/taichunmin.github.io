<template lang="pug">
.card.mb-3
  h5.card-header.bg-secondary.text-white #[span.fa.fa-fw(:class="'fa-' + skill.icon")] {{ skill.title }}
  .card-body
    .row.mb-1(v-for="proficiency, name in sortedItems")
      .col-3.pl-0.pr-1.text-nowrap.text-right(:title="name", data-placement="right", data-toggle="tooltip") {{ name }}
      .col-9.pl-1
        .progress
          .progress-bar.progress-bar-success.progress-bar-striped.bg-success(role="progressbar", :class="`proficiency-${proficiency}`")
</template>

<script>
export default {
  props: ['skill'],
  computed: {
    sortedItems () {
      return _.fromPairs(_.orderBy(_.toPairs(this.skill.items), [1], ['desc']))
    }
  }
}
</script>

<style lang="sass" scoped>
.progress
  height: 1rem
  margin: 0.25rem 0
.proficiency-1
  width: 35%
  background-color: #ffc107 !important
  &:before
    content: '略懂'
.proficiency-2
  width: 60%
  background-color: #17a2b8 !important
  &:before
    content: '中等'
.proficiency-3
  width: 85%
  background-color: #28a745 !important
  &:before
    content: '精通'
</style>

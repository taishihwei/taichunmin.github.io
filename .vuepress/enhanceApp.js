import _ from 'lodash'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Object.defineProperty(Vue.prototype, '_', { value: _ });
}
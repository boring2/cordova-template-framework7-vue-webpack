// Import Vue
import Vue from 'vue'

// Import App Custom Styles
import AppStyles from './assets/sass/main.scss'

// Import App Component
import App from './main.vue'

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  }
})

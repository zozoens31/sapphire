/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// third party libraries
import Vue from 'vue/dist/vue.esm'
import axios from 'axios'
import Toaster from '../services/toaster'

// Application components
import UserList from '../users/UserList'
import Notification from '../shared/notification'

// Add application components here
const components = {
  UserList,
  Notification
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementsByName('csrf-token')[0].getAttribute('content')
  axios.defaults.headers.common = {
    'X-CSRF-TOKEN': header,
    'X-Requested-With': 'XMLHttpRequest'
  };

  Vue.prototype.$routes = Routes
  Vue.prototype.$http = axios
  Vue.prototype.$toaster = new Toaster

  const app = new Vue({
    el: '#app',
    components
  })
})

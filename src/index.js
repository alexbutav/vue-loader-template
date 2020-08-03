import Vue from 'vue';
import MainCompontent from './components/Main.vue';
import Quasar from './quasar.common_full';

Vue.use(Quasar);

var app = new Vue({
    el: '#q-app',
    components: {
        'main-component': MainCompontent
    }
});
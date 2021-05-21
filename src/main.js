import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css'
import router from './router'

/*animação*/
import ScrollAnimation from './util/blockReveal'
import AOS from "aos";
import "aos/dist/aos.css"

/*particulas*/
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
/*alert*/
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll)

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false
Vue.swal({
  title: '<strong>Muito Obrigado por visitar =D </strong>',
  icon: 'info',
  html:
    'O projeto ainda está em <b>desenvolvimento</b>, ' +
    'Ajustes e melhorias pendentes,</b>' +
    'Grato pela atenção',
  showCloseButton: true,
  showCancelButton: false,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Ok!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  
});

new Vue({
  router,

  created(){
    AOS.init({
      once: true,
    });
  },

 
  render: h => h(App)
}).$mount('#app')

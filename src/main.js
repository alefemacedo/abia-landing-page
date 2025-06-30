import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/main.styl';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faExpand, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faExpand)
library.add(faChevronLeft)
library.add(faChevronRight)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // Register the component globally
app.use(router);
app.mount('#app');
import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponent = defineComponent({
    name: 'Root',
    data() {
        return {
            counter: 0,
        };
    },
    
    methods: {
        increment() {
            this.counter++;
    },
},    
});
  
const app = createApp(RootComponent);

const vm = app.mount('#app');



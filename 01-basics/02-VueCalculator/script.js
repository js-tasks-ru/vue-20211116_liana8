// import { createApp } from './vendor/vue.esm-browser.js';
 
// Создайте Vue приложение
 
import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
 
// Создайте Vue приложение
const RootComponent = defineComponent({
    name: 'Root',
    data() {
        return {
            a: 0,
            b: 0,
            operation: 'sum',
        };
    },
    
    computed: { 
        calculation() {
            if (this.operation === 'sum') {
                return Number(this.a) + Number(this.b);
            }
            else if (this.operation === 'subtract') { 
                return Number(this.a) - Number(this.b);
            }
            else if (this.operation === 'multiply') { 
                return Number(this.a) * Number(this.b);
            }
            else if (this.operation === 'divide') { 
                return Number(this.a) / Number(this.b);
            }                
        },     
    },
   
});
  
const app = createApp(RootComponent);
 
const vm = app.mount('#app');



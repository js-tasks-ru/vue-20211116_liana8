import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    increment() {
      this.$emit('update:count', this.count + 1);
   //   return this.count;
    },
  },  
  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button  type="button" @click="increment" >{{ this.count }}</button>`, 
 // template: `<div>Random number = 1</div>`,
});

import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },    
  },  

  template: `
     <div class="meetup-cover" v-bind:style="{ '--bg-url': image ? 'url(' + image + ')' : '' }">
        <h1 class="meetup-cover__title"> {{ title }} </h1>
    </div>`,
});

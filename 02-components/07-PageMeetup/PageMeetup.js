import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../06-MeetupView/MeetupView.js';
import { fetchMeetupById } from './meetupService.js';
 
export default defineComponent({
  name: 'PageMeetup',
 
  components: {
    UiAlert,
    UiContainer,
    MeetupView,    
  },
 
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },
 
  data() {
    return {
      meetup: null,
      error: '',
    };
  },
  
  watch : {
    meetupId:function(id) {
       this.getMeetup(this.meetupId);
    },     
  },
 
  created() {
    this.getMeetup(this.meetupId);
  },
 
  methods: {
    async getMeetup(id) {        
        this.meetup = null;     
        this.error = ''; 
        fetchMeetupById(id).then(
          (meetup) => (this.meetup = meetup),
          (error) => (this.error = error.message),
        );  
    },
  },  
 
  template: `
    <div class="page-meetup">  
      <meetup-view v-if="meetup" :meetup="meetup"></meetup-view>
     
      <ui-container v-if="!meetup && error===''">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>   
 
      <ui-container v-if="error!=''">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>    
    
    </div>`,
});
 
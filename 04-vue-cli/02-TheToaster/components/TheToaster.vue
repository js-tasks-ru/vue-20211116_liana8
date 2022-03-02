<template>
  <div class="toasts">
    <div v-for="toast in toasts" class="toast" :type="toast.type" >
      <ui-icon class="toast__icon" :icon="toast.icon" />
      <span>{{ toast.message }}</span>
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

const DELAY = 5000;

export default {
  name: 'TheToaster',

  components: { UiIcon },

  data() {
    return {
      toasts: [],
    };
  },

  methods: {
    success(message) {
      this.addToast('success', message, 'alert-circle');
    },
    error(message) {
      this.addToast('error', message, 'check-circle');
    },  

  addToast(type, message, icon) {

        const toastId  = setTimeout(() => {
          const idToDelete = this.toasts.indexOf(toast);
          if (idToDelete !== -1) {
            this.toasts.splice(idToDelete, 1);
          }
        }, DELAY);

      var toast = {
         type: type, 
         message: message,
         id: toastId , 
         icon: icon,
         };
       this.toasts.push(toast);

    },
  },    
};

</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>

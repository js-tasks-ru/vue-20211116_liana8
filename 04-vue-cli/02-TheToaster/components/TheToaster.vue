<template>
<<<<<<< HEAD
  <div class="toasts">
    <div v-for="toast in toasts" class="toast" :type="toast.type" >
      <ui-icon class="toast__icon" :icon="toast.icon" />
      <span>{{ toast.message }}</span>
    </div>
  </div>
=======
  <ui-toaster>
    <ui-toast v-for="toast in toasts" :key="toast.id" :type="toast.type">
      {{ toast.message }}
    </ui-toast>
  </ui-toaster>
>>>>>>> 921b6cff2bff5d687f72254882f2819326ae4ea7
</template>

<script>
import UiToaster from './UiToaster';
import UiToast from './UiToast';

const DELAY = 5000;

const DELAY = 5000;

export default {
  name: 'TheToaster',

<<<<<<< HEAD
  components: { UiIcon },
=======
  components: { UiToaster, UiToast },
>>>>>>> 921b6cff2bff5d687f72254882f2819326ae4ea7

  data() {
    return {
      toasts: [],
    };
  },

  methods: {
    success(message) {
<<<<<<< HEAD
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
=======
      this.show('success', message);
    },

    error(message) {
      this.show('error', message);
    },

    // Добавим универсальный метод, который может показывать тост любого типа
    show(type, message) {
      const toast = { type, message };

      toast.id = setTimeout(() => {
        // Удалять можно было бы простым unshift,
        // но такой способ работает только, если DELAY одинаковый
        const idToDelete = this.toasts.indexOf(toast);
        // У нас не может быть ситуации, что тост не нашёлся
        // Но можно предусмотреть удаление вне таймера или другие непредвиденные ошибки
        if (idToDelete !== -1) {
          this.toasts.splice(idToDelete, 1);
        }
      }, DELAY);

      this.toasts.push(toast);
    },
  },
>>>>>>> 921b6cff2bff5d687f72254882f2819326ae4ea7
};

</script>

<style></style>

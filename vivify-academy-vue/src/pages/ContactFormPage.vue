<template>
  <div class="container mt-4">
    <ContactForm @onSubmit="onSubmit" :contact="contact" />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import { mapActions, mapGetters } from 'vuex';
import store from '../store/store.js';

export default {
  components: { ContactForm },
  data() {
    return {
      isEdit: false
    };
  },
  computed: {
    ...mapGetters({
      contact: 'contacts/getEditContact'
    })
  },
  methods: {
    ...mapActions({
      addContactAction: 'contacts/add',
      editContactAction: 'contacts/edit'
    }),
    onSubmit(contact) {
      this.isEdit ? this.editContact(contact) : this.addContact(contact);
    },
    addContact(contact) {
      this.addContactAction(contact).then(() => {
        this.$router.push('/contacts');
      });
    },
    editContact(contact) {
      this.editContactAction(contact).then(() => {
        this.$router.push('/contacts');
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      store.dispatch('contacts/getOne', to.params.id);
      next(vm => {
        vm.isEdit = true;
      });
    }
    next();
  }
};
</script>

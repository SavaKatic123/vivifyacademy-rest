<template>
  <div class="container mt-4">
    <ContactForm @onSubmit="onSubmit" :contact="contact" />
  </div>
</template>

<script>
import { contactsService } from '../services/Contacts';
import ContactForm from '../components/ContactForm.vue';
import { mapActions } from 'vuex';

export default {
  components: { ContactForm },
  data() {
    return {
      contact: {
        first_name: '',
        last_name: '',
        email: '',
        number: ''
      },
      isEdit: false
    };
  },
  methods: {
    ...mapActions({
      addContactAction: 'contacts/add'
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
      contactsService.edit(contact).then(() => {
        this.$router.push('/contacts');
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      contactsService.get(to.params.id).then(response => {
        next(vm => {
          vm.contact = response.data;
          vm.isEdit = true;
        });
      });
    } else {
      next();
    }
  }
};
</script>

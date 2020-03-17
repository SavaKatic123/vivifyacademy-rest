<template>
  <div class="container mt-4">
    <ContactForm @onSubmit="addContact" />
  </div>
</template>

<script>
import { contacts } from '../services/Contacts';
import ContactForm from '../components/ContactForm.vue';

export default {
  components: { ContactForm },
  methods: {
    addContact(contact) {
      contacts.add(contact).then(() => {
        this.$router.push('/contacts');
      });
    }
  }
};
</script>

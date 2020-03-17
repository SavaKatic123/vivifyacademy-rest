<template>
  <span>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <ContactList :contacts="contacts" />
        </div>
        <div class="col-8">
          <ContactDetails :contact="routeContact" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <ContactForm @onSubmit="addContact" />
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import ContactList from '../components/ContactList.vue';
import ContactDetails from '../components/ContactDetails.vue';
import ContactForm from '../components/ContactForm.vue';
import { contacts } from '../services/Contacts';

export default {
  components: {
    ContactList,
    ContactDetails,
    ContactForm
  },
  data() {
    return {
      contacts: []
    };
  },
  computed: {
    routeContact() {
      return this.contacts.find(contact => contact.id == this.$route.params.id);
    }
  },
  methods: {
    addContact(contact) {
      this.contacts.push(contact);
    }
  },
  beforeRouteEnter(to, from, next) {
    contacts.getAll().then(response => {
      next(vm => {
        vm.contacts = response.data;
      });
    });
  }
};
</script>

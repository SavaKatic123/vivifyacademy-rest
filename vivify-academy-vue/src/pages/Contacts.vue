<template>
  <span>
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="true"></loading>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <ContactList :contacts="contacts" />
        </div>
        <div class="col-8">
          <ContactDetails :contact="routeContact" />
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import ContactList from '../components/ContactList.vue';
import ContactDetails from '../components/ContactDetails.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import store from '../store/store.js';
import { mapGetters } from 'vuex';

export default {
  components: {
    ContactList,
    ContactDetails,
    Loading
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    routeContact() {
      if (!this.contacts) {
        return;
      }
      return this.contacts.find(contact => contact.id == this.$route.params.id);
    },
    ...mapGetters({
      contacts: 'contacts/getAll'
    })
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('contacts/getAll');
    next();
  }
};
</script>

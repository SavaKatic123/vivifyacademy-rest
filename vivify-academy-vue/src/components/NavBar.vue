<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/contacts">My Contacts</router-link>
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to="/contacts">Contacts</router-link>
      <router-link class="nav-item nav-link" to="/contact-form">Contact Form</router-link>
      <a href="#" class="nav-item nav-link" @click.prevent="logout" v-if="isAuthenticated"
        >Logout</a
      >
      <router-link class="nav-item nav-link" to="/login" v-if="!isAuthenticated">Login</router-link>
    </div>
  </nav>
</template>

<script>
import { authService } from '../services/Auth';
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/getToken'
    })
  },
  methods: {
    ...mapActions({
      logoutAction: 'auth/logout'
    }),
    logout() {
      authService.logout();
      this.logoutAction();
      this.$router.push('/login');
    }
  }
};
</script>

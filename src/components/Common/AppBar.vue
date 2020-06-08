<template>
  <v-app-bar id="app-bar" app color="pink darken-1" dark>
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      color="blue-grey darken-1"
      @click.stop="setDrawer(!drawer)"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-spacer />

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          class="ml-2"
          min-width="0"
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>
          <!-- ({{ fullName }}) -->
          Name Surname
        </v-btn>
      </template>

      <v-list :tile="false" nav>
        <v-list-item-group color="primary">
          <v-list-item :to="'/profile'">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profil</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AppBar',
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
    },
  },
  methods: {
    ...mapMutations(['setDrawer']),
    logout() {
      console.log('logout');
    },
  },
};
</script>

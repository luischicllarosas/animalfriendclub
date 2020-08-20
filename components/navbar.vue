<template>
  <client-only>
    <v-app-bar color="deep-purple darken-3 white--text" dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title class="">Animalfriend.club</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- If haver USER -->
      <div v-if="$auth.loggedIn">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text>
              <!-- <strong class="text-caption mr-2 white--text">{{this.$auth.user.email}}</strong> -->
              <v-avatar size="35">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <!-- <v-list-item v-for="(item, index) in 5" :key="index">
              <v-list-item-title>Item 1</v-list-item-title>
            </v-list-item> -->
            <v-list-item >
              <!-- <v-list-item-title @click="logout"> -->
                <v-btn @click="$auth.logout()" color="red" class="mx-2 text-caption-2 text-capitalize white--text" text> Cerrar sesion</v-btn>
              <!-- </v-list-item-title> -->
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- No USER -->
      <div v-else>
        <!-- <v-btn class="mx-2" >Registrarse</v-btn> -->
        <v-btn nuxt to="/auth/register" class="mx-2 text-caption-2 text-capitalize">Registrar</v-btn>
        <v-btn nuxt to="/auth/login" class="mx-2 text-caption-2 text-capitalize white--text" text>Iniciar Sesion</v-btn>
        <v-btn @click="$auth.logout()" class="mx-2 text-caption-2 text-capitalize white--text" text>Logout</v-btn>
      </div>
    </v-app-bar>
  </client-only>
</template>
<script>
export default {
  data() {
    return {
      currentUser : null,
    };
  },
  created(){
    console.log(this.$auth.user);
  }
};
</script>

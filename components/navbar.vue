<template>
  <div>
    <v-app-bar color="deep-purple darken-3 white--text" dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title class="">Animalfriend.club</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn> -->
        <!-- <v-btn nuxt to="/registro" color="primary">Registrate</v-btn>
        <v-btn nuxt to="/login" color="light">Login</v-btn> -->
        <!-- <v-icon>home</v-icon> -->
        
      <!-- </v-btn> -->

      <!-- <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn> -->

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="white">mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

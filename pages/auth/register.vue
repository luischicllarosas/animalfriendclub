<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip> -->
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="register">
                  <v-text-field v-model="form.name" label="Nombres" name="login" prepend-icon="mdi-card-account-details" type="text"> </v-text-field>
                  <v-text-field v-model="form.email" label="Email" name="email" prepend-icon="mdi-at" type="text"> </v-text-field>
                  <v-text-field v-model="form.password" id="password" label="Contraseña" name="password" prepend-icon="mdi-lock" type="password"> </v-text-field>
                  <v-btn type="submit" color="primary">Registrarse</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Registrarse</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      // await this.$axios.post('/auth/register',this.form);
    },
  },
};
</script>

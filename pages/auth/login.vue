<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login login</v-toolbar-title>
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
                <v-form ref="form_login" lazy-validation>
                  <v-text-field v-model="login.email" label="Email" name="email" prepend-icon="mdi-account" type="text" required :rules="[rules.required, rules.email]"></v-text-field>
                  <v-text-field
                    v-model="login.password"
                    id="password"
                    label="Contraseña"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                    :rules="[rules.required, rules.password]"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="validate" color="primary" :loading="btnLoading">Ingresar</v-btn>
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
      login: {
        email: "",
        password: "",
      },
      btnLoading: false,
      rules: {
        required: (value) => !!value || "Necesitas llenar este campo.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Incorrecto, el email no tiene el formato correcto.";
        },
        password: (value) => value.length > 5 || "Mínimo 6 carácteres",
      },
    };
  },
  methods: {
    validate() {
      this.btnLoading = true;
      let form = this.$refs.form_login.validate();
      if (form) {
        this.userLogin();
      } else {
        this.btnLoading = false;
      }
    },
    async userLogin() {
      try {
        let res = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log("Res :: ",res);
        this.btnLoading = false;
        // this.$router.push("/");
      } catch (err) {
        console.log("Error : ",err);
        this.btnLoading = false;
      }
    },
  },
};
</script>

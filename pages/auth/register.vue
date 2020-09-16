<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Unete a este club</v-toolbar-title>
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
                <v-form ref="form" lazy-validation>
                  <v-text-field
                    v-model="form.name"
                    label="Nombres"
                    name="name"
                    prepend-icon="mdi-card-account-details"
                    type="text"
                    tabindex="1"
                    autofocus
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-at"
                    type="text"
                    clearable
                    counter="50"
                    maxlenght="50"
                    :rules="[rules.required, rules.email]"
                    required
                    tabindex="2"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="form.password"
                    id="password"
                    label="Contraseña"
                    name="password"
                    prepend-icon="mdi-lock"
                    counter="100"
                    maxlenght="100"
                    :rules="[rules.required, rules.password]"
                    @click:append="show1 = !show1"
                    :type="show1 ? 'text' : 'password'"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    required
                    tabindex="3"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="form.password_confirmation"
                    id="password_confirmation"
                    label="Confirma tu contraseña"
                    name="password_confirmation"
                    prepend-icon="mdi-lock"
                    counter="100"
                    maxlenght="100"
                    :rules="[rules.required, rules.passwordConfirm]"
                    @click:append="show2 = !show2"
                    :type="show2 ? 'text' : 'password'"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    required
                    tabindex="4"
                  >
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <!-- <v-spacer></v-spacer> -->
                <v-btn
                  color="primary"
                  @click="validate"
                  :loading="btnLoading"
                  tabindex="4"
                >
                  Registrarse
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-snackbar
          :value="snackbar.status"
          :timeout="snackbar.timeout"
          :color="snackbar.color"
          :top="snackbar.top"
          :bottom="snackbar.bottom"
          :left="snackbar.left"
          :right="snackbar.right"
          :vertical="snackbar.mode"
        >
          {{ snackbar.content }}
        </v-snackbar>
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
        email: "",
        password: "",
        password_confirmation: "",
      },
      show1: false,
      show2: false,
      rules: {
        required: (value) => !!value || "Necesitas llenar este campo.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return (
            pattern.test(value) ||
            "Incorrecto, el email no tiene el formato correcto."
          );
        },
        password: (value) => value.length > 5 || "Mínimo 6 carácteres",
        passwordConfirm: (value) =>
          value == this.form.password || "Las contraeñas no coinciden",
      },
      btnLoading: false,
      snackbar: {
        status: false,
      },
    };
  },
  methods: {
    validate() {
      this.btnLoading = true;
      let form = this.$refs.form.validate();
      if (form) {
        this.register();
      } else {
        this.btnLoading = false;
      }
    },
    async register() {
      this.snackbar.status = false;
      try {
        let res = await this.$axios.post("/api/auth/register", this.form);

        if (res.data.body == "created") {
          this.snackbar = {
            status: true,
            color: "primary",
            content: "Te has registrado correctamente",
            timeout: 6000,
          };
          await this.$auth.loginWith("local", {
            data: this.form,
          });
        }

        if (res.data.body == "email exists") {
          this.snackbar = {
            status: true,
            color: "red",
            content:
              "Ya hay una cuenta registrada con este correo, utiliza otro por favor.",
            timeout: 6000,
          };
        }
        this.btnLoading = false;
      } catch (error) {
        console.log(error);
        this.btnLoading = false;
      }
    },
  },
};
</script>

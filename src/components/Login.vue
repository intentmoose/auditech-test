<template>
  <div class="login">
    <v-dialog v-model="loginDialog" persistent fullscreen hide-overlay>
      <v-card class="login-form-wrap">
        <v-card class="pa-7 elevation-5" width="500">
          <h2 :class="!invalidDetails ? 'mb-8' : ''">
            Sign in to access dashboard
          </h2>
          <h4 class="err-message" v-if="errMesage">*{{ errMesage }}</h4>
          <p color="red" class="mb-8" error></p>
          <v-alert
            dense
            outlined
            class="mb-8"
            type="error"
            v-if="invalidDetails"
          >
            Invalid <strong>email</strong> or <strong>password</strong>
          </v-alert>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="validate"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              class="mb-8"
              required
            ></v-text-field>

            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passRules.required, passRules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              v-model="password"
              hint="At least 8 characters"
              class="input-group--focused mb-8"
              @click:append="show = !show"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              type="submit"
            >
              Login
            </v-btn>
          </v-form>
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import "../firebase/init.js";
import { getAuth, signInAnonymously } from "firebase/auth";

/*
 * Using Firebases authentication
 * ⚠️ currently using Anonymous Auth for POC mode
 */

export default {
  name: "Login",
  props: ["loggedIn", "loginDialog"],
  data: () => ({
    valid: true,
    name: "",
    show: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: null,
    passRules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 4 || "Min 4 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    errMesage: null,
    invalidDetails: false,
  }),
  methods: {
    validate() {
      let valid = this.$refs.form.validate();
      if (valid) this.login();
    },
    login() {
      const auth = getAuth();
      signInAnonymously(auth)
        .then((res) => {
          // Signed in and token saved in localStorage
          localStorage.setItem("token", res.user.uid);
          this.$emit("logged-in");
        })
        .catch((error) => {
          const errorMessage = error.message;
          this.errMesage = errorMessage;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.err-message {
  color: red;
}
</style>
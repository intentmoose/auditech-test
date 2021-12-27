<template>
  <div class="login">
    asdasd
    <v-dialog v-model="loginDialog" persistent fullscreen hide-overlay>
      <v-card class="login-form-wrap">
        <v-card class="pa-7 elevation-5" width="500">
          <h2 :class="!invalidDetails ? 'mb-8' : ''">
            Sign in to access dashboard
          </h2>
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "HelloWorld",
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
    invalidDetails: false,
  }),
  methods: {
    auth() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
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
</style>
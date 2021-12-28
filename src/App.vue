<template>
  <v-app>
    <v-app-bar app dark>
      <h3 class="d-flex align-center">
        <v-icon large class="mr-2">mdi-swap-horizontal</v-icon>
        The Exchange
      </h3>
      <v-spacer></v-spacer>
      <UserSettings />
    </v-app-bar>

    <v-main>
      <Login
        @logged-in="(loggedIn = true), (loginDialog = false)"
        :loginDialog="loginDialog"
        :loggedIn="loggedIn"
        v-if="!loggedIn"
      />
      <Markets v-else />
    </v-main>
  </v-app>
</template>

<script>
import Markets from "./components/Markets";
import Login from "./components/Login";
import UserSettings from "./components/UserSettings";

export default {
  name: "App",
  components: {
    Markets,
    Login,
    UserSettings,
  },
  created() {
    if (localStorage.token.length !== undefined) {
      this.loggedIn = true;
      this.loginDialog = false;
    }
  },
  data: () => ({
    loginDialog: true,
    loggedIn: false,
  }),
};
</script>

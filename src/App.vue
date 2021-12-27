<template>
  <v-app>
    <v-app-bar app dark>
      <h1 class="d-flex align-center">
        <v-icon large class="mr-2">mdi-swap-horizontal</v-icon>
        The Exchange
      </h1>
    </v-app-bar>

    <v-main>
      <Login :loginDialog="loginDialog" :loggedIn="loggedIn" />
      <Main v-if="loggedIn" />
    </v-main>
  </v-app>
</template>

<script>
import Main from "./components/Main";
import Login from "./components/Login";

export default {
  name: "App",
  components: {
    Main,
    Login,
  },
  data: () => ({
    loginDialog: true,
    loggedIn: false,
  }),
};
</script>

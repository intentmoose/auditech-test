<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark v-bind="attrs" v-on="on">
          <v-avatar>
            <v-icon dark> mdi-account-circle </v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-btn @click="logOut">log out</v-btn>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "UserSettings",
  methods: {
    logOut() {
      localStorage.removeItem("token");
      location.reload();
    },
  },
};
</script>

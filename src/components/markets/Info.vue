<template>
  <div class="">
    <v-dialog
      v-model="dialogOpen"
      width="600"
      transition="dialog-bottom-transition"
      scrollable
      @click:outside="$emit('dialog-close')"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Exchange Info
        </v-card-title>

        <v-card-text class="pt-5">
          <v-list-item v-for="(value, name, i) in dialogData" :key="i * 2032">
            <v-list-item-content>
              <v-list-item-title>
                <span class="name">{{ nameFormat(name) }}</span>
              </v-list-item-title>
              <v-list-item-subtitle> {{ value }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$emit('dialog-close')"> close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: ["dialogOpen", "dialogData"],
  data: () => ({}),
  created() {},
  methods: {
    /**
     * takes key names and formats them by spliting and joining by uppercase letters.
     */
    nameFormat(name) {
      let formatted;
      formatted = name.split(/(?=[A-Z])/).join(" ");
      return formatted;
    },
  },
};
</script>
<style lang="scss" scoped>
.name {
  text-transform: lowercase;
  &::first-letter {
    text-transform: uppercase;
  }
}
</style>
<template>
  <v-container>
    <v-row class="text-center">
      <Markets />
    </v-row>
  </v-container>
</template>

<script>
import Markets from "@/components/Markets";
export default {
  name: "Main",
  components: { Markets },
  data: () => ({}),
};
</script>

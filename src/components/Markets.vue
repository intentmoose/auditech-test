<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="markets" xs="12">
        <v-data-table
          v-if="markets"
          :headers="headers"
          :items="markets"
          :items-per-page="10"
          class="elevation-1"
          loading-text="Loading markets..."
          :loading="markets.length === 0 ? true : false"
          @click:row="rowClick"
        ></v-data-table>
        <Info
          :dialogOpen="dialogOpen"
          :dialogData="dialogData"
          @dialog-close="dialogOpen = false"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Info from "@/components/markets/Info";

export default {
  name: "Markets",
  components: {
    Info,
  },
  data: () => ({
    headers: [
      { text: "Exchange name", value: "fullExchangeName" },
      { text: "Exchange", value: "exchange" },
      { text: "Region", value: "region" },
      { text: "Price hint", value: "priceHint" },
      { text: "Market state", value: "marketState" },
    ],
    markets: [],

    // Dialog setting
    dialogOpen: false,
    dialogData: null,
  }),
  created() {
    this.getMarkets();
  },
  methods: {
    rowClick(e) {
      this.dialogOpen = true;
      this.dialogData = e;
    },
    getMarkets() {
      this.axios
        .get("/signin")
        .then((response) => {
          console.log(response);
          let data = response.data.marketSummaryResponse.result;
          this.markets = data;
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
        });
    },
  },
};
</script>

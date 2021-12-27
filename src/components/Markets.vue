<template>
  <v-col class="markets">
    <v-btn xs="12" @click="getMarkets">generate</v-btn>
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
      // { text: "Exchange", align: "start", sortable: false, value: "exchange" } -- example
      { text: "Exchange Name", value: "fullExchangeName" },
      { text: "Exchange", value: "exchange" },
      { text: "Region", value: "region" },
      { text: "Price Hint", value: "priceHint" },
      { text: "First Trade Date", value: "firstTradeDateMilliseconds" },
    ],
    markets: [],
    // Dialog setting
    dialogOpen: false,
    dialogData: null,
  }),
  created() {},
  methods: {
    rowClick(e) {
      console.log(e);
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

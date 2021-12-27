<template>
  <v-col class="markets">
    <v-btn 	xs=12 @click="getMarkets">generate</v-btn>
    <v-data-table
      v-if="markets"
      :headers="headers"
      :items="markets"
      :items-per-page="5"
      class="elevation-1"
      :loading="markets.length === 0"
    ></v-data-table>
  </v-col>
</template>

<script>
export default {
  name: "Markets",
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
  }),
  created() {},
  methods: {
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

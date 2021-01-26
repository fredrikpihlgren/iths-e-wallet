import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: function(){
    return {
      wallet: [
        {
          id: "432984728397",
          holder: "Bulba Saur",
          vendor: "bitcoin",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validDay: "5"
        },
        {
          id: "432984728397",
          holder: "Spöket Laban",
          vendor: "ninja",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validDay: "5"
        },
        {
          id: "432984728397",
          holder: "Vladimir Putin",
          vendor: "blockchain",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validDay: "5"
        },
        {
          id: "432984728397",
          holder: "Patrick Bateman",
          vendor: "evil",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validDay: "5"
        },
      ]
    }
  },
  render: h => h(App)
}).$mount("#app");



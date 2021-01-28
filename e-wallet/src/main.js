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
      currentCard: "123",
      dValues: {
          def_id: "123",
          def_holder: "Default Name",
          def_vendor: "",
          def_number: "XXXXYYYYZZZZFFFF",
          def_validMonth: "8",
          def_validDay: "9",
      },
      wallet: [
        {
          id: "567",
          holder: "Rutger Bibelsson",
          vendor: "bitcoin",
          number: "1234567890000",
          validMonth: "12",
          validDay: "5"
        },
        {
          id: "897",
          holder: "Spöket Laban",
          vendor: "ninja",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validDay: "8"
        },
        /*
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
          validDay: "22"
        },
        */
      ]
    }
  },
  methods: {
    lastData() {
      let wLength=this.wallet.length-1;
      this.dValues.def_id=this.wallet[wLength].id;
      this.dValues.def_holder=this.wallet[wLength].holder;
      this.dValues.def_vendor=this.wallet[wLength].vendor;
      this.dValues.def_number=this.wallet[wLength].number;
      this.dValues.def_validMonth=this.wallet[wLength].validMonth;
      this.dValues.def_validDay=this.wallet[wLength].validDay;
    },
    blankData() {
      this.dValues.def_id="";
      this.dValues.def_holder="";
      this.dValues.def_vendor="";
      this.dValues.def_number="";
      this.dValues.def_validMonth="";
      this.dValues.def_validDay="";
    }
  },
  render: h => h(App)
}).$mount("#app");



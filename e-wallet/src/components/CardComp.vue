<template>
  <div class="cardStyle" v-bind:class="computedClass" v-on:click="displayCard(cardId)" v-show="hideCard(cardId)">
    <div></div>
    <div class="numbertxt">{{cardnumberSplit}}</div>
    <div><p class="rubrik">CARDHOLDER NAME</p><p class="brodtext">{{name}}</p></div>
    <div><p class="rubrik">VALID THRU</p><p class="brodtext">{{month +"/"+ year}}</p></div>
  </div>
</template>


<script>
export default {

  computed: {
    cardnumberSplit: function () {
      return this.cnumber.substring(0,4) +" "+ this.cnumber.substring(4,8) +" "+ this.cnumber.substring(8,12) +" "+ this.cnumber.substring(12,16)
    },
    computedClass() {
      let className = '';
      switch(this.vendor) {
      case "bitcoin": className = 'c-Bitcoin'; break;
      case "ninja": className = 'c-Ninja'; break;
      case "blockchain": className = 'c-Blockchain';break;
      case "evil": className = 'c-Evil'; break;
      }
      return className;
    }
  },
  props: {
    vendor: String,
    name: String,
    cnumber: String,
    month: String,
    year: String,
    cardId: String,
    clickable: Boolean,
    visible: Boolean,
  },
  methods: {
    hideCard(hideId) {
        let dShow=true;
        if (hideId == this.$root.$data.currentCard) {
          dShow=false;
        }
        if (!this.clickable) {dShow=true;}
          
        return dShow;
    },
    displayCard(inp) {
      if (this.clickable) {
      this.$root.$data.currentCard=inp;
      this.$root.$data.showKill=false;
      for (let i=0;i<this.$root.$data.wallet.length;i++) {
          if (inp == this.$root.$data.wallet[i].id) {
              this.$root.$data.dValues.def_holder=this.$root.$data.wallet[i].holder;
              this.$root.$data.dValues.def_vendor=this.$root.$data.wallet[i].vendor;
              this.$root.$data.dValues.def_number=this.$root.$data.wallet[i].number;
              this.$root.$data.dValues.def_validMonth=this.$root.$data.wallet[i].validMonth;
              this.$root.$data.dValues.def_validDay=this.$root.$data.wallet[i].validDay;
          }
          
      }
      }
    },

  }
}

</script>


<style scoped>


div {
  font-family: var(--cardFont);
  color:black;
}
.numbertxt {
  font-size:3rem;
  font-weight:900;
  margin:0;
  padding:0;
}
.rubrik {
  font-size:1.4rem;
  margin:0;
  padding:0;
}
.brodtext {
  font-size:2rem;
  font-weight:900;
  margin:0;
  padding:0;
}

</style>

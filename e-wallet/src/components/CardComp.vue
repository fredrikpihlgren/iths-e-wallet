<template>
  <div class="cardStyle" v-bind:class="computedClass" v-on:click="test(cardId)"> <!-- v-on:click="greet" -->
    <div></div>
    <div>{{cardnumberSplit}}</div>
    <div><p>CARDHOLDER NAME</p><p>{{name}}</p></div>
    <div><p>VALID THRU</p><p>{{month +"/"+ year}}</p></div>
  </div>
</template>


<script>
export default {

  data() { return {
        cardnumber: "1234567891011123",
        firstname: "John",
        lastname: "Doe",
        //month: 12,
        //year: 22,
        //vendor: "",
  }
  },
  computed: {
    cardnumberSplit: function () {
      return this.cnumber.substring(0,4) +" "+ this.cnumber.substring(4,8) +" "+ this.cnumber.substring(8,12) +" "+ this.cnumber.substring(12,16)
      //{{cardnumber.substring(0,4) +" "+ cardnumber.substring(4,8) +" "+ cardnumber.substring(8,12) +" "+ cardnumber.substring(12,16)}}
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
  },
  methods: {
    test(inp) {
      alert(inp);
      this.$root.$data.currentCard=inp;
      for (let i=0;i<this.$root.$data.wallet.length;i++) {
          if (inp == this.$root.$data.wallet[i].id) {
              this.$root.$data.dValues.def_holder=this.$root.$data.wallet[i].holder;
          }
          
      }
      //console.log(inp);
    },
    /*
    greet: function() {
      this.yoda++;
      if (this.yoda > 4) {this.yoda=0;}
      //alert(this.yoda);
    }
    */

  }
}

</script>




<template>
  <div class="cardStyle" v-bind:class="computedClass" :click="test"> <!-- v-on:click="greet" -->
    <div></div>
    <div>{{cardnumber.substring(0,4) +" "+ cardnumber.substring(4,8) +" "+ cardnumber.substring(8,12) +" "+ cardnumber.substring(12,16)}}</div>
    <div><p>CARDHOLDER NAME</p><p>{{firstname +" "+ lastname}}</p></div>
    <div><p>VALID THRU</p><p>{{month +"/"+ year}}</p></div>
  </div>
</template>


<script>
export default {

  data() { return {
        cardnumber: "1234567891011123",
        firstname: "John",
        lastname: "Doe",
        month: 12,
        year: 22,
        //vendor: "",
  }
  },
  computed: {
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
  },
  methods: {
    test(inp) {
      console.log(inp);
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




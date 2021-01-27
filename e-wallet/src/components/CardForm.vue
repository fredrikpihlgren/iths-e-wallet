<template>
      <div class="formwrapper">
        <span>
          <label for="cardnum">CARD NUMBER</label>
          <input type="text" value="cardnum" maxlength="16" v-model="cnum" v-on:input="cnumfix">
        </span>
        <span>
          <label for="fnamn">FIRST NAME</label>
          <input type="text" value="fnam" v-model="fnamn" v-on:input="mergeNamnx">
        </span>
        <span>
          <label for="enamn">LAST NAME</label>
          <input type="text" value="enam" v-model="enamn" v-on:input="mergeNamnx">
        </span>
        <span>
          <label for="month">MONTH</label>
          <select value="month">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </span>
        <span>
          <label>YEAR</label>
          
        </span>
        <span>
          <label for="vend">VENDOR</label>
          <select value="vend">
            <option value="bcoin">Bitcoin Inc</option>
            <option value="nbank">Ninja Bank</option>
            <option value="3">Block Chain Inc</option>
            <option value="3">Evil Corp</option>
          </select>
        </span>

        <button class="routerButton" v-on:click="addCard">ADD CARD</button>
      </div>

    
</template>

<script>
//this.$root.$data.dValues.def_holder
export default {
  data() { return {
    fnamn: "",
    enamn: "",
    namn: "",
    cnum: "",
  }},
  methods: {
    cnumfix() {
        this.$root.$data.dValues.def_number=this.cnum;
    },
    mergeNamnx() {
        this.namn=this.fnamn +" "+ this.enamn;
        this.$root.$data.dValues.def_holder=this.namn;
    },
    addCard() {
      this.$root.$data.wallet.push({id: "432984728397",holder: "Fox Mulder",vendor: "bitcoin",number: "XXXXYYYYZZZZ0000",validMonth: "1",validDay: "2"})
      this.$router.push('/')
    },
  }

};
</script>

<style scoped>

.formwrapper {
  margin-top:90px;
}

</style>
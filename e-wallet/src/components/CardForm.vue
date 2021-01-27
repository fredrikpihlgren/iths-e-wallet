<template>
      <div class="formwrapper">
        <span>
          <label for="cardnum">CARD NUMBER</label>
          <input type="text" value="cardnum" maxlength="16" class="formField" v-model="cnum" v-on:input="writeInfo(cnum)">
        </span>
        <span>
          <label for="fnamn">FIRST NAME</label>
          <input type="text" value="fnam" class="formField" v-model="fnamn" v-on:input="mergeNamnx">
        </span>
        <span>
          <label for="enamn">LAST NAME</label>
          <input type="text" value="enam" class="formField" v-model="enamn" v-on:input="mergeNamnx">
        </span>
        <span>
          <label for="months">MONTH</label>
          <select value="months" class="formField" v-model="month" v-on:change="writeMonth(month)">
            <option value="1" selected>January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </span>
        <span>
          <label for="year">YEAR</label>
          <select value="year" class="formField" v-model="year" v-on:change="writeYear(year)">
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>

          </select>
          
        </span>
        <span>
          <label for="vend">VENDOR</label>
          <select value="vend" class="formField" v-model="vend" v-on:change="writeVendor(vend)">
            <option value="bitcoin">Bitcoin Inc</option>
            <option value="ninja">Ninja Bank</option>
            <option value="blockchain">Block Chain Inc</option>
            <option value="evil">Evil Corp</option>
          </select>
        </span>

        <button class="routerButton" v-on:click="addCard">ADD CARD</button>
      </div>

    
</template>

<script>
//this.$root.$data.dValues.def_holder
export default {
  data() { return {
    cardid: "",
    fnamn: "",
    enamn: "",
    namn: "",
    cnum: "",
    month: "",
    year: "",
    vend: "",
    pathShort: this.$root.$data.dValues,
  }},
  methods: {
    writeInfo(from) {
        this.pathShort.def_number=from;
    },
    writeMonth(from) {
        this.pathShort.def_validMonth=from;
    },
    writeYear(from) {
        this.pathShort.def_validDay=from;
    },
    writeVendor(from) {
        this.pathShort.def_vendor=from;
    },
    mergeNamnx() {
        this.namn=this.fnamn +" "+ this.enamn;
        this.$root.$data.dValues.def_holder=this.namn;
    },
    addCard() {
      var d = new Date().getTime();
      alert(d);
      this.$root.$data.wallet.push({id: d,holder: this.namn,vendor: this.vend,number: this.cnum,validMonth: this.month,validDay: this.year})
      this.$router.push('/')
    },
  }

};
</script>

<style scoped>

.formwrapper {
  margin-top:90px;
  display:flex;
  flex-flow: row wrap;
  width:100%;
  max-width:500px;
  margin-left:auto;
  margin-right:auto;
}


label {
  display:block;
  width:100%;
  font-size:1.5rem;
  color:rgba(0,0,0,0.8);
}

.formField {
  width:90%;
  border:2px solid black;
  border-radius:10px;
  font-size:2.5rem;
  color:rgba(0,0,0,0.8);
  outline:0;
  box-sizing: border-box;
}

.formwrapper>span {
  width:100%;
  padding-top:10px;
  padding-bottom: 10px;
}

.formwrapper>span:nth-child(2),
.formwrapper>span:nth-child(3),
.formwrapper>span:nth-child(4),
.formwrapper>span:nth-child(5) {
  width:50%;
}


.formwrapper>span:nth-child(3),
.formwrapper>span:nth-child(5) {
  text-align:right;
}


.formwrapper>span:nth-child(1)>input {
  width:100%;
}
.formwrapper>span:nth-child(6)>select {
  width:100%;
}
.formwrapper>span:nth-child(2)>input,
.formwrapper>span:nth-child(3)>input {
  width:90%;
}





</style>
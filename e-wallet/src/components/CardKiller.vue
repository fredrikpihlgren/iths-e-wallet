<template>
  <div v-show="this.$root.$data.wallet.length > 0">
      <div v-show="!$root.$data.showKill">
      <button v-on:click="$root.$data.showKill=true" class="routerButton killcard">DELETE CARD</button> <!-- v-on:click="show = !show" -->
      </div>
      <div v-show="this.$root.$data.showKill" class="killwrapper">
            <div class="killtext">Are you sure you want to delete this card?</div>
            <button v-on:click="killCard($root.$data.currentCard)" class="routerButton">YES</button>
            <button v-on:click="$root.$data.showKill=false" class="routerButton">NO</button>
      </div>
      </div>
</template>

<script>
export default {
  methods: {
    killCard(param) {
      for (let i=0;i<this.$root.$data.wallet.length;i++) {
        if (this.$root.$data.wallet[i].id == param) {
          this.$root.$data.wallet.splice(i, 1);
          this.$root.lastData();
          this.$root.$data.showKill=false;
          }
      }
    }
  },
}
</script>


<style scoped>

.killwrapper {
    width:500px;
    min-height:200px;
    margin:0;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    padding:0;
}

.killtext {
font-family: var(--cardFont);
text-align:center;
font-weight:900;
font-size:1.2rem;
}

</style>
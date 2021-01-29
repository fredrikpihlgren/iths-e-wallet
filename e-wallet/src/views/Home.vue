<template>
  <div>
    <TopText rubrik="E-WALLET" rubriksmall="ACTIVE CARD" />
      <ShowCard
      v-bind:vendor="this.$root.$data.dValues.def_vendor"
      v-bind:name="this.$root.$data.dValues.def_holder"
      v-bind:cnumber="this.$root.$data.dValues.def_number"
      v-bind:month="this.$root.$data.dValues.def_validMonth"
      v-bind:year="this.$root.$data.dValues.def_validDay"
      v-bind:cardId="this.$root.$data.dValues.def_id"
      v-bind:visible="true"
      v-show="this.$root.$data.wallet.length > 0"
      />

      <CardKiller />

    <CardStack />
  <router-link to="/newcard" class="routerButton">ADD A NEW CARD</router-link>
  </div>
</template>



<script>

// @ is an alias to /src
import TopText from "@/components/TopText.vue";
import ShowCard from "@/components/CardComp.vue";
import CardStack from "@/components/CardStack.vue";
import CardKiller from "@/components/CardKiller.vue";

export default {
  components: {
    TopText,
    ShowCard,
    CardStack,
    CardKiller,
  },
  mounted() {
    this.$root.lastData();
  },
  
};

</script>


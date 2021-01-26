<template>
  <div>
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <TopText rubrik="E-WALLET" rubriksmall="ACTIVE CARD" />

    <ShowCard vendor="" />
    <CardStack />
  <router-link to="/newcard" class="routerButton">ADD A NEW CARD</router-link>
  </div>
</template>


<script>

// @ is an alias to /src
import TopText from "@/components/TopText.vue";
import ShowCard from "@/components/CardComp.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  components: {
    TopText,
    ShowCard,
    CardStack,
  }
};

</script>

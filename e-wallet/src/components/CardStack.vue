<template>
      <div class="topCard">

 
      <ShowCard class="cardMargins"
      v-for="item in this.$root.$data.wallet" :key="item.id"
      v-bind:vendor="item.vendor"
      v-bind:cnumber="item.number"
      v-bind:name="item.holder"
      v-bind:month="item.validMonth"
      v-bind:year="item.validDay"
      v-bind:cardId="item.id"
      v-bind:clickable="true"
      v-bind:visible="item.visible"
      />
        
      </div>

</template>

<script>
import ShowCard from "@/components/CardComp.vue";

export default {
  components: {
    ShowCard,
  },
};
</script>

<style scoped>

.cardMargins {
  margin-top:-200px;
}
.topCard {
  margin-top:260px;
}

</style>
<template>
      <div class="topCard">

<ul>
  <li v-for="item in this.$root.$data.wallet" :key="item.id">
    {{ item.id }} - {{ item.holder }}
      <ShowCard
      v-bind:vendor="item.vendor"
      v-bind:cnumber="item.number"
      v-bind:name="item.holder"
      v-bind:month="item.validMonth"
      v-bind:year="item.validDay"
      />
  </li>
</ul>

        <!--<ShowCard v-for="item in wallet" :key="item.length" />
        {{this.$root.$data.wallet}}-->
        
      </div>

      <!-- {{ item.message }} -->
</template>

<script>
import ShowCard from "@/components/CardComp.vue";

export default {
  components: {
    ShowCard,
  }
};
</script>


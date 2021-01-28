<template>
  <div>
    <TopText rubrik="ADD A NEW BANK CARD" rubriksmall="NEW CARD" />

    <ShowCard
      v-bind:vendor="this.$root.$data.dValues.def_vendor"
      v-bind:name="this.$root.$data.dValues.def_holder"
      v-bind:cnumber="this.$root.$data.dValues.def_number"
      v-bind:month="this.$root.$data.dValues.def_validMonth"
      v-bind:year="this.$root.$data.dValues.def_validDay"
    />
    <CardForm />
  </div>
</template>


<script>

// @ is an alias to /src
import TopText from "@/components/TopText.vue";
import ShowCard from "@/components/CardComp.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  components: {
    TopText,
    ShowCard,
    CardForm,
  },
};

</script>
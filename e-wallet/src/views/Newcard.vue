<template>
  <div>
    <TopText rubrik="ADD A NEW BANK CARD" rubriksmall="NEW CARD" />

    <ShowCard />
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
  }
};

</script>
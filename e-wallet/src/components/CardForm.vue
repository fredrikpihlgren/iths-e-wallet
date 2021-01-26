<template>
      <div>
        <p>form goes here</p>

        <div class="routerButton" v-on:click="addCard">ADD CARD</div>
      </div>

    
</template>

<script>
export default {

  methods: {
    addCard() {
      this.$router.push('/')
    }
  }

};
</script>
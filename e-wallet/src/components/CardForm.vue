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
      //router.push('home')
    }
  }

};
</script>
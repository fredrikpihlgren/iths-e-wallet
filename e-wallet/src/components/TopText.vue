<template>
  <div>
<h2>{{rubrik}}</h2>
<h6>{{rubriksmall}}</h6>
  </div>
</template>

<script>
export default {
  props: {
    rubrik: String,
    rubriksmall: String
  },
}
</script>



<style scoped>

div > h2, h6 {
  width:100%;
  display:block;
  text-align:center;
  font-family: var(--myFont);
}

</style>
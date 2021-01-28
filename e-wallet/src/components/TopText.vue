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
  width:50%;
  display:block;
  text-align:center;
  font-family: var(--myFont);
  font-size:2.5rem;
  font-weight:900;
  margin: 0 auto 0 auto;
  padding:0;
}

div > h6 {
  font-family: var(--cardFont);
  font-size:1.5rem;
  font-weight:700;
  color:rgba(0,0,0,0.6);
  margin-top:40px;
}

</style>
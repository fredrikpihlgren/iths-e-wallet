<template>
  <div class="wrapper">
      <!--<router-link to="/">Cards</router-link> -->
      <!--<router-link to="/newcard">New Card</router-link>-->
    <router-view />
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap');

:root {
  background-color: #FFF;
  --myFont: Verdana, Helvetica, sans-serif;
  --cardFont: 'Inconsolata', monospace;
  --blackcol:rgba(0,0,0,0.8);
  --whitecol:rgba(255,255,255,0.8);
}

.wrapper {
display:block;
width:550px;
min-height:400px;
margin-left:auto;
margin-right:auto;
margin-bottom:100px;
}

.cardStyle {
  display:flex;
  flex-flow: row wrap;
  width:500px;
  height:300px;
  border: 0;
  border-radius:25px;
  margin-left:auto;
  margin-right:auto;
  box-sizing:border-box;
  box-shadow: 0px 0px 18px 10px rgba(0,0,0,0.3);
  background-color: #D6D6D6;
  color:var(--blackcol);
  background-image: url('./assets/chip-dark.svg'), url('./assets/vendor-bitcoin.svg');
  background-repeat: no-repeat;
  background-position: 20px 30px, 95% 30px;
  position: sticky;
}

.c-Bitcoin {
  background-color: #FFB445;
}
.c-Evil {
  color:var(--whitecol);
  background-color: #D92D4C;
  background-image: url('./assets/chip-light.svg'), url('./assets/vendor-evil.svg');
}
.c-Blockchain {
  color:var(--whitecol);
  background-color: #7B4DDC;
  background-image: url('./assets/chip-light.svg'), url('./assets/vendor-blockchain.svg');
}
.c-Ninja {
  color:var(--whitecol);
  background-color: #3A3A3A;
  background-image: url('./assets/chip-light.svg'), url('./assets/vendor-ninja.svg');
}

.cardStyle > div {
  display:inline-block;
  box-sizing:border-box;
  margin:0;
  width:50%;
  height:60%;
}
.cardStyle > div:nth-child(1) {
  width:100%;
  height:40%;
}
.cardStyle > div:nth-child(2) {
  text-align:center;
  width:100%;
  height:20%;
}
.cardStyle > div:nth-child(3) {
  width:70%;
  height:30%;
  padding-left:5%;
}
.cardStyle > div:nth-child(4) {
  width:30%;
  height:30%;
  padding-right:5%;
  text-align:right;
}

.topCard {
margin-top:80px;
}
.cardMargins {
  margin-top:15px; /* 15px, -200px */
  margin-bottom:15px;
}

.routerButton {
  background-color:white;
  width:500px;
  height:60px;
  line-height: 60px;
  text-align:center;
  border:2px solid black;
  border-radius:15px;
  display:block;
  margin-left:auto;
  margin-right:auto;
  margin-top:15px;
  margin-bottom:15px;
  font-size:2rem;
  font-family: var(--myFont);
  font-weight:700;
  cursor:pointer;
  text-decoration:none;
  color:black;
}
.routerButton:hover {
  background-color:black;
  color:white;
}

</style>

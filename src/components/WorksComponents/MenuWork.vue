<template>
  <nav class="flex-container-btn">
    <router-link class="btn" to="/web" active-class="active" >Web</router-link>
    <router-link class="btn" to="/mobile" active-class="active"
      >Mobile</router-link
    >
    <router-link class="btn" to="/games" active-class="active"
      >Games</router-link
    >
    <router-link class="btn" @click="saveSession()" to="/desktop" active-class="active"
      >
     
      Desktop</router-link
    >
  </nav>
</template>

<script>
export default {

  }


</script>

<style>
.flex-container-btn {
  margin-top: 5%;
 padding: 3%;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* border: 1px solid rgba(47, 234, 187, 0.294); */
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  /* box-shadow: inset 0 0 5px #2feabb; */
}

.flex-container-btn a {
  width: 18%;
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 3rem;
  /*   padding:8%; */
  margin: 1%;

  color: rgba(47, 234, 187, 1);
  text-transform: uppercase;
  margin-bottom: 2%;
  
}

.flex-container-btn .btn {
  text-decoration: none;

  position: relative;
  overflow: hidden;
  border-radius: 16px 16px;
  border: 1px solid rgba(47, 234, 187, 0.787);
  box-shadow: inset 0 0 5px #2feabb;
}

 .flex-container-btn .btn:hover {
  
  /* box-shadow: 1px 1px 15px 10px rgba(47, 234, 187, 0.4); */
  color: rgba(47, 234, 187, 1);
  /* transform: scale(1.05); */
} 
.active{
  box-shadow: 1px 1px 15px 10px rgba(47, 234, 187, 0.4) !important;
  color: #2feabb !important;
  transform: scale(1.05);
  font-weight: 900 !important;
}

.flex-container-btn .btn:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(47, 234, 187, 0.4),
    transparent
  );
  transition: all 650ms;
}

.flex-container-btn .btn:hover:before {
  left: 100%;
}
@media ( max-width: 1200px) {

.flex-container-btn a {
  width: 22%;
  
  font-size: 3vw;

  padding: 1vw 3vw;
  
  margin: 1%;

  color: rgba(47, 234, 187, 1);
  text-transform: uppercase;
  margin-bottom: 2%;
  
}







}
</style>
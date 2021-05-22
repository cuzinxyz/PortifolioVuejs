<template>
  <div id="portifolio" class="works-grid">
    <div class="container-works-title" data-aos="fade-right">
      <p>#02</p>
      <p> Works</p>
    </div>
    <template>
      <div class="container-work ">
       
         <Menu/>
        
        <hr>
     
          <div class="flex-container">  
             <!-- <div class="bg"></div> -->
           
            
            <router-view />
            
              <!-- <Web v-for="work in works"  :key="work.title" :work="work"/> -->
           
            
              <!-- <Works
            class="flex-container-childs"
            v-for="work in works"
            :key="work.title"
            :work="work"
            data-aos="fade-down"
          ></Works> -->
            </div>
      </div>
    </template>
  </div>
</template>

<script>
import Works from "./Works.vue";
import Menu from "../components/WorksComponents/MenuWork"
import Web from "../components/WorksComponents/Web"
export default {
  components: { Works,Menu,Web },
  props: {
    works: { type: Array },
  },
};
</script>

<style>

hr{
   border: 1px solid rgba(47, 234, 187, 0.527);
   opacity: 0;
}
.works-grid{
  z-index: 999;
}
.container-work {
  max-width: 90%;
  margin: 0 auto;
  /* min-height: 100vh; */
  /* background: #eee; */
  /* padding: 30px; */
  
}
.container-works-title {
  color: #2feabb;
  font-size: calc(1vw + 4rem);
  font-weight: 500;
  margin: 10% 0 5% 5%;
  transition-delay: 1s;
  transition-duration: 2000ms;
}
.container-works-title p:nth-child(1) {
  font-weight: 600;
}


 .flex-container{
     margin-top: 3%;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid rgba(47, 234, 187, 0.369); */
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  /* border-radius: 16px; */
  /* box-shadow: inset 0 0 5px #2feabb;  */
 background-color: #11152b;
/*se qusier que os efeitos de triangulo apareça ,so tirar*/
 
 
}
/* .flex-container .flex-container-childs {
   margin-top: 3%;
  position: relative;
  background: #11152b;
  font-family: "Barlow", sans-serif;
  border-radius: 16px;
  box-shadow: inset 0 0 5px #2feabb;
  border: 1px solid rgba(47, 234, 187, 0.294);
  width: 40%;
  height: 500px;

  overflow: hidden;
} 

@media (max-width: 850px) {
  .container-works-title {
    font-size: calc(1vw + 2.5rem);
    margin: 5% 0 0% 5%;
  }
  .container-works-title p {
    margin-bottom: 0rem;
  }
  
}
@media (max-width: 600px) {
  .container {
    max-width: 100%;
  }
 
} */

.bg {
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
  background-repeat: repeat;
  animation: bg-animation .2s infinite;
  opacity: .9;
  visibility: visible;
}

@keyframes bg-animation {
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
}
/*ANIMATION */
/* .flex-container .flex-container-childs:nth-child(1) {
  transition-delay: 1s;
  transition-duration: 2000ms;
}
.flex-container .flex-container-childs:nth-child(2) {
  transition-delay: 1.5s;
  transition-duration: 2000ms;
}
.flex-container .flex-container-childs:nth-child(3) {
  transition-delay: 1.5s;
  transition-duration: 2000ms;
} */
</style>

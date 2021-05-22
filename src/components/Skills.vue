
<template id="skillContainer">
  <div>
    <div class="container-skills-content-svg" data-aos="fade-down" style=" transition-duration: 1000ms">
      <img :src="require(`@/assets/static/svg/${skill.backGround}`)" />
      <figcaption>
        <h1 data-aos="fade-right" >{{ skill.title }}</h1>
      </figcaption>
       
      <div class="container-skills-content-flipcard" > 
       <div class="flip-box" v-for="ar in skill.arrayicons" :key="ar" data-aos="fade-down">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img  :src="require(`@/assets/static/svg/icons/${ar}`)" />
            </div>
            <div class="flip-box-back">
              <img :src="require(`@/assets/static/svg/painel-vazio.svg`)" />
              <h3>{{ ar.slice(0, -4).toUpperCase() }}</h3>
            </div>
          </div>
        </div> 
       

<!-- <transition-group name="flip">
        
             <b-list-group v-for="ar in skill.arrayicons" :key="ar">
          <b-list-group-item>    <img :src="require(`@/assets/static/svg/icons/${ar}`)" /></b-list-group-item>
        </b-list-group> </transition-group>
      </div>
      -->
           
           
         <!--    
           <div class="container-skills-content-flipcard">
        <div class="flip-box" v-for="ar in skill.arrayicons" :key="ar">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img :src="require(`@/assets/static/svg/icons/${ar}`)" />
            </div>
            <div class="flip-box-back">
              <img :src="require(`@/assets/static/svg/painel-vazio.svg`)" />
              <h3>{{ ar.slice(0, -4).toUpperCase() }}</h3>
            </div>
          </div>
        </div> -->
       </div>
         


    </div>
  </div>
  <!-- <div class="flip-box-back" v-for="arrayName in skill.arrayiconsNames" :key="arrayName"> -->
</template>

<script>

export default {
  props: {
    skill: { type: Object },
  },

 
};
</script>

<style scoped>


.container-skills-content-svg {
  user-select: none;

  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.container-skills-content-svg h1 {
  color: #2feabb;
  font-size: 3vw;
  font-weight: 900;
  position: absolute;
  margin: -18% 0 0 13%;
}
.container-skills-content:nth-child(3) .container-skills-content-svg h1 {
  margin-top: -30%;
}
.container-skills-content:nth-child(4) .container-skills-content-svg h1 {
  margin-top: -28%;
}

.container-skills-content-flipcard {
  width: 100%;

  margin: -13% 0 0 0;
  position: absolute;
  /* background: #2feabb13; */
  /* display: flex; */

  display: flex;
  justify-content: center;
  align-items: center;
}
.container-skills-content-flipcard img {
  padding-right: 10%;
  width: 12vw;
}
.flip-box:nth-child(1) {
  transition-delay: 0.5s;
 transition-duration: 600ms;
  
  
}
.flip-box:nth-child(2) {
  transition-delay: 1s;
 
  transition-duration: 600ms;
  
}

.flip-box:nth-child(3) {
  transition-delay: 1.5s;
 
  transition-duration: 600ms;
  
}

.flip-box:nth-child(4) {
  transition-delay: 2s;

  
  transition-duration: 500ms;
}

.flip-box:nth-child(5) {
  transition-delay: 2.5s;
 transition-duration: 100ms;
  
  
}

.flip-box:nth-child(6) {
  transition-delay: 3s;
 transition-duration: 1;
  
  
}



/*---------------------------------------------------------------------*/
/*web*/
.container-skills-content:nth-child(2) .container-skills-content-flipcard {
  flex-wrap:initial;
  margin: -14% 0 0 11%;
  width: 80%;


}
.container-skills-content:nth-child(2) .container-skills-content-flipcard img {
  padding-right: 5%;

}
/*---------------------------------------------------------------------*/

.container-skills-content:nth-child(3) .container-skills-content-flipcard {
  margin: -25% 0 0 0;
}
.container-skills-content:nth-child(4) .container-skills-content-flipcard {
  margin: -15% 0 0 0;
}
/* .container-skills-content-flipcard img{
width: 100%;
  
   padding-right: 10%;
} */

.flip-box {
  user-select: none;

  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  background-color: transparent;

   width: 12vw;
  /* height: 18.5vh; */

  perspective: 1000px;
 
}

.flip-box-inner {
  position: relative;
   width: 12vw;
  /* height: 21.5vh; */

  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front,
.flip-box-back {
  position: absolute;
   width: 12vw;
  
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-box-front {
   width: 12vw;
}

.flip-box-back {
  position: relative;

  color: #2feabb;

  text-align: center;
  transform: rotateY(180deg);
  user-select: none;

  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.flip-box-back h3 {
  position: absolute;

  font-size: 1.5vw;
  font-weight: 900;
  margin-top: 3%;
    margin-left: -10%;
  

}

.flip-box:hover h3 {
  -webkit-animation: focus-in-contract 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: focus-in-contract 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
/***************************/

@-webkit-keyframes focus-in-contract {
  0% {
    letter-spacing: 1em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@media (max-width:700px) {
  .container-skills-content-svg h1 {
 
  font-size: 3.5vw;
  
}
}
@media (max-width:500px) {
 .flip-box-back h3{
   margin-top: 15%;
     font-size: 1.5vw;
     margin-left: -6%;
 }
}
</style>
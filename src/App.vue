
<template>
  <div id="app"  >
    
    <transition name="fade">
      <div v-show="elementVisible" id="loader" class="loader">
        <svg
          viewBox="0 -4.758 1223.99 456.516"
        >
         
          <path
            style="stroke: rgb(47, 234, 187); fill: rgb(47, 234, 187)"
            d="M 1.951 446.541 L 119.977 446.541 L 273.19 259.605 L 327.438 274.999 L 314.976 209.755 L 490.915 2.293 L 370.69 0.826 L 1.951 446.541 Z"
          />
          <path
            style="stroke: rgb(47, 234, 187); fill: rgb(47, 234, 187)"
            d="M 292.392 447.003 L 425.288 288.55 L 403.382 200.195 L 472.02 233.054 L 665.522 1.581 L 781.623 1.581 L 407.033 448.463 L 292.392 447.003 Z"
          />
          <path
            style="stroke: rgb(47, 234, 187); fill: rgb(47, 234, 187)"
            d="M 449.842 448.464 L 826.83 -0.609 L 944.915 1.582 L 566.459 449.194 L 449.842 448.464 Z"
          />
          <path
            style="stroke: rgb(47, 234, 187); fill: rgb(47, 234, 187)"
            d="M 969.764 3.121 L 986.723 118.273 L 1116.503 202.62 L 920.357 264.963 L 1021.379 332.442 L 1219 270.098 L 1219.738 162.28 L 969.764 3.121 Z"
          />
          <path
            style="stroke: rgb(47, 234, 187); fill: rgb(47, 234, 187)"
            d="M 747.031 309.148 L 873.593 298.773 L 1013.553 448.464 L 877.315 448.464 L 747.031 309.148 Z"
          />
        </svg>
      </div>
    </transition>
    <div style="width: 100%; height: 5px"></div>

    <Menu />

    <Home />

    <SkillsGrid :skills="skills" />
    <WorksGrid :works="works" />

    <Footer />
    
  </div>
</template>

<script>
import WorksGrid from "./components/WorksGrid.vue";
import Menu from "./components/Menu.vue";
import Home from "./components/Home.vue";
import SkillsGrid from "./components/SkillsGrid.vue";
import Footer from "./components/Footer.vue";

/*arrays*/
import skills from "./util/skillsArray";
import works from "./util/worksArray";
 
export default {
 
  components: { WorksGrid, Menu, Home, SkillsGrid, Footer },
  data() {
    return {
      skills,
      works,
      elementVisible: true,
       isActive: true,
    };
  },
  created() {
    setTimeout(() => (this.elementVisible = false), 1800);
    //  setTimeout(() => (this.isActive = false), 1800);

      // setTimeout(function(){document.querySelector('app').classList.remove('esconder');}, 1.8 * 1000);
  },

};
</script>

<style>
/* body{
    overflow-y: hidden;
}
.esconder{
 background: #2feabb;
  overflow-y: hidden;
} */

@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Barlow", sans-serif;
}
@font-face {
  font-family: "Barlow", sans-serif;
  src: local("Barlow"),
    url("https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap");
}
body {
  overflow-x: hidden;
  background-color: #11152b;
}

/*SCROLL*/
/* width */
::-webkit-scrollbar {
  width: 10px;
  background-color: #11152b;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #2feabb;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #2feabb;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #2feabba2;
}

/*load page*/
 .cls-1 {
                fill: #2feabb;
                stroke: #2feabb;
                stroke-miterlimit: 10;
              }
.loader {
  position: fixed;
  display: flex;
  align-items: center;

  left: 0px;
  top: 0px;

  width: 100%;
  height: 100%;
  z-index: 9999;

  background-color: #11152b;
}
.loader svg {
  /* margin-top: 15vw;
  margin-left: 25vw;
  display: block; */
  display: block;
  margin: auto;
  width: 50%;
}

.loader path {
  stroke-width: 2px;
  stroke-dasharray: 1600;
  animation: 1.3s draw forwards ease-out;
}
@keyframes draw {
  0% {
    stroke-opacity: 1;
    fill-opacity: 0;
    stroke-dashoffset:1500;
  }
  70% {
    fill-opacity: 0;
    stroke: #000;
  }
  100% {
    
    fill-opacity: 1;
     stroke-dashoffset: 0; 
    stroke: none;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.swal2-html-container{
  font-weight: 600;
}
.swal2-html-container b{
  font-weight: 900;
  color:red;
}
</style>
 
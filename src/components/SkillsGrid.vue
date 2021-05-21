<template >
  <div id="sobre" class="container-skills">
    <div data-aos="fade-right"  style=" transition-duration: 4000ms" class="container-skills-title">
      <p>#01</p>
      <p>Experiências</p>
    </div>

    <div class="container-skills-grid">
      <Skills
        class="container-skills-content"
        v-for="skill in skills"
        :key="skill.title"
        :skill="skill"
      ></Skills>
    </div>
  </div>
</template>

<script>
import Skills from "./Skills.vue";

export default {
  components: { Skills },
  props: {
    skills: { type: Array },
  },
};
</script>

<style Scoped>
.container-skills {
  user-select: none;
position: relative;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  /* margin-top: 8%; */
  width: 100%;
  overflow: hidden;
   background-color: #11152b;
     /* -webkit-mask-image: linear-gradient(0deg,#71fff3,transparent); */
}

.container-skills::before {
  content: "";
  position: absolute;
  height: 0.01%;/* pequeno demais pra respónsivo */
  width: max(100px, 50vw);
  /* top:-1px; */
  /* display: none; */
  left: -200px;

      background: linear-gradient(to right, rgba(0,0,0,0), #2feabb);
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
  animation: linha-animacao 5s linear infinite;
  animation-delay: 1.3s;
  border-radius: 50px;
}
.container-skills-grid {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 10%; */
}

@keyframes linha-animacao {
  0% {
    left: -70vw;
  }
  100% {
    left: 100vw;
  }
}

.container-skills-title {
  color: #2feabb;
  font-size: calc(1vw + 4rem);
  font-weight: 500;
  margin: 5% 0 5% 5%;
}
.container-skills-title p:nth-child(1) {
  font-weight: 600;
}
.container-skills-content {
  width: 90%;
  height: 30%;

  position: relative;
  overflow: hidden;
}
@media (max-width: 2000px) {
 
  .container-skills::before {
    height: 1px;
  }
}
@media (max-width:700px) {
 .container-skills-title {
  color: #2feabb;
  font-size: calc(1vw + 2.5rem);
  font-weight: 500;
  margin: 1% 0 5% 5%;
}
.container-skills-title p{
  margin-bottom: 0rem;
}
  
}



</style>
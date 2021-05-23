<template>
  <!-- <div class="painel-works">
    <div class="atom-spinner">
      <div class="spinner-inner">
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        
        <div class="spinner-circle">&#9679;</div>
      </div> 
    </div>
  </div>-->

 
  <div class="painel-works">
    <!-- <h1>Web  </h1> -->
    <div
      class="card-container"
      v-for="work in work"
      :key="work.title"
      :work="work"
      data-aos="fade-up"
    >
      <!-- <div class="img-icon">
          <img class="pro" :src="require(`@/assets/static/svg/${work.icons}`)" />
    </div> -->

      <div class="img-painel">
        <img
          class="round"
          loading="lazy"
          :src="require(`@/assets/static/${work.img}`)"
        />
      </div>
      <h3>{{ work.title }}</h3>

      <h6></h6>
      <p>{{ work.legend }}</p>
      <ul class="social-icons">
        <li>
          <a :href="work.github" target="blank"><i class="fa fa-github"></i></a>
        </li>
        <li>
          <a :href="work.deploy" target="blank"><i class="fa fa-eye"></i></a>
        </li>
      </ul>
      <div class="skills">
        <h6>Skills</h6>
        <ul>
          <li v-for="skills in work.arraySkills" :key="skills">{{ skills }}</li>
        </ul>
      </div>
    </div>
  </div>



</template>

<script>
export default {
 
 data() {
    return {
      work: [
             {
          title: "Github Finder",
          img: "gitginder.png",
          legend:
            " Aplicação com requisição da api github users, que tem como proposito simular a pesquisa de perfis do Github.",
          framework: "Desenvolvido em React",
          developed: "Curso",
          language: "Linguagem:Js",
          github: "https://github.com/Henrique-Rossi/Github-Finder-ReactJs",
          deploy: "https://nervous-hawking-eeae91.netlify.app/",
          icons: "react.svg",
          arraySkills: [
            "React JS",
            "Axios",
            "Api",
            "React Hooks",
            "ReactDOM",
            "HTML",
            "CSS",
            "JavaScript",
          ],
        },
          
        {
          title: "Clone Zelda",
          img: "jogo.webp",
          legend: "Clone desenvolvido em Unity3D do game The Legend Of Zelda.",
          frameGames: "Desenvolvido em .Net",
          developed: "Desenvolvido na Faculdade",
          language: "Linguagem:C# e SqlServer",

          github: "https://github.com/Henrique-Rossi/CloneZelda3D",
          deploy:"https://www.youtube.com/watch?v=3p-kCWAGhGo&ab_channel=HenriqueRossi",
          icons: "net.svg",
          arraySkills: [
            "Unity3D",
            "Assets",
            "C#",
            "Gsl",
          
          ],
        },

        {
          title: "Single Page no React com React Router e bootstrap",
          img: "rotas.png",
          legend: "React Router com api interna e estilização com Bootstrap.",
          framework: "Desenvolvido ReactJs",
          developed: "Estudos",
          language: "Linguagem:JavaScript",
          github: "https://github.com/Henrique-Rossi/RoutersReactJsChallenge",
          deploy: "https://sleepy-bartik-c4e8c1.netlify.app",
          icons: "react.svg",
          arraySkills: [
            "React JS",
            "Api",
            "React Router",
            "ReactDOM",
            "React Hooks",
            "BootStrap",
            "JavaScript",
            "HTML",
            "CSS",
            
            
          ],
        },
     
       
       

        
      ],
    };
  },
};
</script>

<style>



.recente h1{
    color:#2feabb;
    font-size: 5vw;
    margin-left: 3%;
}








.atom-spinner,
.atom-spinner * {
  box-sizing: border-box;
}

.atom-spinner {
  height: 100px;
  width: 100px;
  overflow: hidden;
}

.atom-spinner .spinner-inner {
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
}

.atom-spinner .spinner-circle {
  display: block;
  position: absolute;
  color: #2feabb;
  font-size: calc(60px * 0.24);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.atom-spinner .spinner-line {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation-duration: 1s;
  border-left-width: calc(60px / 25);
  border-top-width: calc(60px / 25);
  border-left-color: #2feabb;
  border-left-style: solid;
  border-top-style: solid;
  border-top-color: transparent;
}

.atom-spinner .spinner-line:nth-child(1) {
  animation: atom-spinner-animation-1 1s linear infinite;
  transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
}

.atom-spinner .spinner-line:nth-child(2) {
  animation: atom-spinner-animation-2 1s linear infinite;
  transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
}

.atom-spinner .spinner-line:nth-child(3) {
  animation: atom-spinner-animation-3 1s linear infinite;
  transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
}

@keyframes atom-spinner-animation-1 {
  100% {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes atom-spinner-animation-2 {
  100% {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes atom-spinner-animation-3 {
  100% {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  }
}
</style>
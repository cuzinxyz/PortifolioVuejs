<template>
  <div class="painel-works">
    <!-- <h1>Web  </h1> -->
    <div
      class="card-container"
      v-for="Games in Games"
      :key="Games.title"
      :Games="Games"
    >
      <!-- <div class="img-icon">
          <img class="pro" :src="require(`@/assets/static/svg/${work.icons}`)" />
    </div> -->

      <div class="img-painel">
        <img
          class="round"
          loading="lazy"
          :src="require(`@/assets/static/${Games.img}`)"
        />
      </div>
      <h3>{{ Games.title }}</h3>

      <h6></h6>
      <p>{{   Games.legend }}</p>
      <ul class="social-icons">
        <li>
          <a :href="Games.github" target="blank"><i class="fa fa-github"></i></a>
        </li>
        <li>
          <a :href="Games.deploy" target="blank"><i class="fa fa-eye"></i></a>
        </li>
      </ul>
      <div class="skills">
        <h6>Skills</h6>
        <ul>
          <li v-for="skills in Games.arraySkills" :key="skills">{{ skills }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Games: [
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
          title: "Game",
          img: "game.png",
          legend: "Jogo desenvolvido para estudos da engine.",
          frameGames: "Desenvolvido em .Net",
          developed: "Desenvolvido na Faculdade",
          language: "Linguagem:C# e SqlServer",

          github: "https://github.com/Henrique-Rossi/GameBall",
          deploy:"https://www.youtube.com/watch?v=IzmatUmkNdE&ab_channel=HenriqueRossi",
          icons: "net.svg",
          arraySkills: [
            "Unity3D",
            "Assets",
            "C#",
            "Gsl",
          
          ],
        },
      ],
    };
  },
};
</script>


<style>
/* .painel-Gamess {
  margin: 2% 0 2% 0;
  display: flex;
  flex-direction: row;

  width: 100%;

  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card-container h3 {
  margin: 15px 0;
  font-size: 2.5vw;
  color: #2feabb;
  text-align: left;
  padding: 5px 3%;
  height: 10%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-container h6 {
  color: aliceblue;
  margin: 5px 0;
  text-transform: uppercase;
}

.card-container p {
  color: aliceblue;
  font-size: 1vw;
  line-height: 21px;
  text-align: left;
  padding: 5px 3%;
  height: 7%;
}

.card-container {
  margin-top: 2%;
  background-color: #11162a;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;

  position: relative;
  width: 30%;
  max-width: 100%;
  text-align: center;
  margin-bottom: 3%;

  transition: all 265ms ease-in;
}
.card-container:hover {
  
  cursor: pointer;
 
}
.card-container .pro {
  position: absolute;
  top: -30px;
  left: -50px;
  z-index: 999;
}
.img-icon img {
  width: 20%;
}
.img-painel img {
  clip-path: polygon(0% 10%, 6% 1%, 100% 0%, 100% 87%, 94% 100%, 0% 100%);
  width: 100%;
  height: 350px;

  -webkit-mask-image: linear-gradient(180deg, #71fff3, transparent);
  filter: grayscale(50%);
}

.skills {
  color: #71fff3;
  background-color: transparent;
  text-align: left;
  padding: 15px;
  border-top: #2feabb 1px groove;
  width: 100%;
  height: 13vh;
   transition: all 265ms ease-in;
}

.skills ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.skills ul li:hover{
  transform: scale(1.05);
}

.skills ul li {
  border: 1px solid #2d2747;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  margin: 0 7px 7px 0;
  padding: 7px;
}


.social-icons {
  list-style: none;
  margin: 1em 1em;
  text-align: left;
}

.social-icons li {
  display: inline-block;
  margin: 0.15em;
  position: relative;
  font-size: 1em;
}

.social-icons i {
  color: #fff;
  position: absolute;
  top: 0.95em;
  left: 0.96em;
  transition: all 265ms ease-out;
}

.social-icons a {
  display: inline-block;
}

.social-icons a:before {
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  content: " ";
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
  background: linear-gradient(45deg, #11162a, #2feabb);
  transition: all 265ms ease-out;
}

.social-icons a:hover:before {
  transform: scale(0);
  transition: all 265ms ease-in;
}

.card-container .social-icons a:hover i {
  transform: scale(2.2);
  -ms-transform: scale(2.2);
  -webkit-transform: scale(2.2);
  color: #2feabb;
  background: linear-gradient(180deg, #11162a, #2feabb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 265ms ease-in;
}



.card-container:nth-child(1){
  
 transition-duration: 1s  !important;
}
.card-container:nth-child(2){
  transition-delay: 0.5s;
 transition-duration: 1.5s  !important;
}
.card-container:nth-child(3){
  transition-delay: 1s;
 transition-duration: 2s  !important;
} */
</style>
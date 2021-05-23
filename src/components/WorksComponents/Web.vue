<template>
  <div class="painel-works">
    
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
          title: "Sistema de Paginação",
          img: "paginacao.png",
          legend:
            " Sistema de Paginação e Pesquisa com Api jsonplaceholder com ReactJs.",
          framework: "ReactJs",
          developed: "Estudos",
          language: "Linguagem:JavaScript",
          github: "https://github.com/Henrique-Rossi/ReactJsPage",
          deploy: "https://agitated-goodall-d19d3d.netlify.app/",
          icons: "react.svg",
          arraySkills: [
            "React JS",
            "React Hooks",
            "ReactDOM",
            "JavaScript",
            "HTML",
            "CSS",
            
            "API",
            "Jest",
            "Data fetching",
           
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
          title: "Todo React Js",
          img: "todoreacrt.png",
          legend: " Lista de tarefa todo.",
          framework: "Desenvolvido em React",
          developed: "Curso",
          language: "Linguagem:Js",
          github: "https://github.com/Henrique-Rossi/Todo-ReactJS",
          deploy: "https://2se3i.csb.app/",
          icons: "react.svg",
          arraySkills: [
            "React JS",
            "React Hooks",
            "ReactDOM",
            "HTML",
            "CSS",
            "JavaScript",
          ],
        },

        {
          title: "VueCrud Com FireBase",
          img: "vuejscrud.jpeg",
          legend:
            "Conectando com Servidor via HTTP e Crud simples com VueJs e com banco de dados, FireBase.",
          framework: "Desenvolvido em React",
          developed: "Curso",
          language: "Linguagem:Js",
          github: "https://github.com/Henrique-Rossi/vueCrudSimples",

          icons: "react.svg",
          arraySkills: [
            "Vue JS",
            "FireBase",
            "Axios",
            "bootstrap-vue",
            "HTML",
            "CSS",
            "JavaScript",
          ],
        },
       

        
      ],
    };
  },
};
</script>

<style >
.painel-works {
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
    /* transform: scale(1.05) !important; */
  cursor: pointer;
 
}
.card-container .pro {
  position: absolute;
  top: -30px;
  left: -50px;
  z-index: 999;
}
/* .img-icon img {
  width: 20%;
} */
.img-painel img {
  clip-path: polygon(0% 10%, 6% 1%, 100% 0%, 100% 87%, 94% 100%, 0% 100%);
  width: 100%;
  height: 350px;

  -webkit-mask-image: linear-gradient(180deg, #71fff3, transparent);
  filter: grayscale(50%);
}

.skills {
  color: #71fff3;
  
  /* background-color: royalblue; */
  text-align: left;
  padding: 15px ;
  border-top: #2feabb9a 1px groove;
  width: 100%;
  /* height: 13%; */
   transition: all 265ms ease-in;
  
}

.skills ul {
   display:  flex;
   flex-wrap: wrap;
   justify-content:flex-start;
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
  margin: 0 1.5% 1.5% 0;
  padding: 1.5%;
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
} 
.card-container:nth-child(4){
  transition-delay: 1s;
 transition-duration: 2.5s  !important;
} 
.card-container:nth-child(5){
  transition-delay: 1s;
 transition-duration: 3s  !important;
} 
@media ( max-width: 1200px) {

.img-painel img {

  height: 150px ;

}
.skills {
  padding: 15px 0px 15px 15px;
}

}
@media ( max-width: 800px) {

.card-container{
  width: 45%;
}
.card-container p {
  
  font-size: 2vw;
  line-height: 21px;
  text-align: left;
  padding: 0% 3%;
  
  height: 10%;
}

.card-container h3 {
  margin: 15px 0;
  font-size: 3.5vw;

  padding: 0px 3%;
  height: 7%;

}



}
@media ( max-width: 600px) {


.social-icons li {
  display: inline-block;
  margin: 0.15em;
  position: relative;
  font-size: 1em;
}

.social-icons i {
  color: #fff;
  position: absolute;
  top: 0.6em;
  left: 0.65em;
  
}

.social-icons a {
  display: inline-block;
}

.social-icons a:before {
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  content: " ";
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: block;
  background: linear-gradient(45deg, #11162a, #2feabb);
  transition: all 265ms ease-out;
}
.card-container:nth-child(5){
 display: none;
} 
}
@media ( max-width: 550px) {
  .card-container{
  width: 80%;
}
.card-container p {
  
  font-size: 4vw;
  line-height: 21px;
  text-align: left;
  padding: 0% 3%;
  
  height: 10%;
}

.card-container h3 {
  margin: 15px 0;
  font-size: 6vw;
}
.card-container h6 {
  color: aliceblue;
  margin: 5px 0px 10px 0;
  text-transform: uppercase;
}
.skills {
  padding: 2px 0px 30px 15px;
}

.social-icons li {
 
 margin-left: -10px;
 margin-right: 20px;
 
}

}
</style> 


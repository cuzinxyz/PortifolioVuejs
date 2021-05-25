<template>
  <div id="home" class="home">
    <div class="particulas">
      <vue-particles
        color="#71fff3"
        shapeType="triangle"
        linesColor="#71fff3"
        :particlesNumber="100"
      ></vue-particles>
    </div>
    <div data-aos="fade-right" class="home-painel-banner-svg">
      <div  class="home-painel-banner-content-svg">
        <img src="@/assets/static/svg/painel-foto.svg" alt="" />

        <div data-aos="zoom-in-down" class="home-painel-banner-content-me">
          <img src="@/assets/static/me.webp" alt="" />
        </div>
        <div class="home-painel-banner-content-infos">
          <h1 data-aos="fade-down">Olá, eu sou <span data-aos="fade-down" class="name-span">Henrique Rossi</span></h1>
          <div class="jobs-text">
         <div data-aos="fade-down" >Desenvolvedor |</div>   <div  data-aos="fade-down"  > FullStack | </div>  <div data-aos="fade-down" >Game Design</div>
          </div>
     

          <div  class="wrapper-banner " >
            <button onclick="window.open('https://drive.google.com/file/d/15Lyw0HQPjDVU0zJfWl6PS9KkLxH5B8Y2/view?usp=sharing')"    >
              Baixar Curriculo
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div class="icons-home">
          <ul  >
            <li data-aos="fade-right">
              <a href="https://github.com/Henrique-Rossi" target="_blank">
                <i class="fa fa-github" :class="icon"> </i>
              </a>
            </li>
            <li data-aos="fade-right">
              <a
                href="https://www.linkedin.com/in/henrique-rossi-4171b11a2/"
                target="_blank"
              >
                <i class="fa fa-linkedin" :class="icon"></i>
              </a>
            </li>

            <li data-aos="fade-right">
              <a href="https://www.instagram.com/gamedevhrv/" target="_blank">
                <i class="fa fa-instagram" :class="icon"> </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    icon() {
      return "fa fa-linkedin,fa fa-github,fa-instagram";
    },
  },
};
</script>

<style>
.particulas {
  position: absolute;
  width: 100%;
}
#particles-js {
  margin-top: 15%;
}
.home {
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 8%;
  background: transparent;
}
.home-painel-banner-svg {
  width: 85%;
  height: 100%;
  margin-top: 12%;
  position: relative;

  background-image: url("/img/banner.426cfc0b.svg");
   /* -webkit-mask-image: linear-gradient(180deg,#000,transparent); */
  background-repeat: no-repeat;

  margin-left: 5%;
  transition-delay: 2s;
}

.home-painel-banner-content-svg img {
  margin-left: -6.5%;
  width: 28.1%;
}

.home-painel-banner-content-me img {
  position: absolute;
  margin: -21.5% 0 0 0.7%;
  width: 13%;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
  filter: grayscale(10%);
  transition-delay: 3s;
     -webkit-mask-image: linear-gradient(180deg,#71fff3,transparent);
}

.home-painel-banner-content-infos {
  position: absolute;
  margin: -18% 0 0 36%;
  font-size: 1.2vw;
  color: rgba(255, 255, 255, 0.75);
}
.home-painel-banner-content-infos .name-span {
  color: #71fff3;

  font-weight: 900;
  transition-delay: 2.5s; 
}
.home-painel-banner-content-infos h2 {
  margin-top: 5%;
  font-size: 1.5vw;
  text-align: center;
  font-weight: 200;
}
.home-painel-banner-content-infos h1 {
  font-weight: 900;
  font-size: 2em;
  text-align: center;
  transition-delay: 2.1s; 
}

@media (max-width: 900px) {
  .home-painel-banner-svg {
    width: 92%;

    margin-top: 20%;
    margin-left: 6%;
  }
}
@media (max-width: 700px) {
  .home-painel-banner-svg {
    margin-top: 23%;
    margin-bottom: 5%;
  }
  .home-painel-banner-content-infos {
    text-align: center;

    margin: -20% 0 0 36%;
    font-size: 1.6vw;
  }
  .home-painel-banner-content-infos {
    text-align: center;

    margin: -20% 0 0 36%;
    font-size: 1.6vw;
  }
  .home-painel-banner-content-infos h1 {
    margin-top: 2%;
  }
 .jobs-text div {
    
    font-size: 2vw;
    
  }
}
@media (max-width: 500px) {
  .home-painel-banner-svg {
    margin-top: 25%;
    margin-bottom: 5%;
  }
}

@media (max-width: 450px) {
  .home-painel-banner-svg {
    margin-top: 28%;
    margin-bottom: 2%;
  }
  .home-painel-banner-content-infos {
    text-align: center;

    margin: -20% 0 0 36%;
    font-size: 1.6vw;
  }
  .home-painel-banner-content-infos h1 {
    margin-top: 2%;
  }
.jobs-text div {
    
    font-size: 2vw;
    
  }
}

/*icons*/
.icons-home {
  position: absolute;
  margin-top: -20%;
  margin-left: 25%;
}
.icons-home i {
  font-size: 3vw;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
  padding: 10%;
  border-radius: 10%;
}
.icons-home a {
  color: #2feabb;
  text-decoration: none;
}

.icons-home li {
  list-style: none;
  padding: 10px;
}

.icons-home i:hover {
  color: white;
}

@media (max-width: 900px) {
  .icons-home {
    margin-top: -22%;
  }
}
@media (max-width: 700px) {
  .icons-home {
    margin-top: -22%;
  }
  .icons-home i {
    font-size: 4vw;
  }
  .icons-home li {
    padding: 2px;
  }
}
@media (max-width: 500px) {
  .icons-home {
    margin-top: -21%;
    margin-left: 25%;
  }
}
@media (max-width: 400px) {
  .icons-home {
    margin-top: -23%;
  }
  .icons-home i {
    font-size: 3.8vw;
  }
  .icons-home li {
    padding: 0px;
  }
}

/*button */
.wrapper-banner {
  position: absolute;
  top: 10vw;
  /* left:46%; */
  left: 51%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: auto;
}
.wrapper-banner button {
  width: max(100px, 11vw);

  height: 5vh;
  background: #11152b00;
  border-style: none;
  color: rgb(255, 255, 255);
  font-size: max(13px, 1vw);
  letter-spacing: 2;
  font-family: "Barlow", sans-serif;

  outline: none;
  cursor: pointer;
  position: relative;
  padding: 0px;
  overflow: hidden;
  transition: all 0.5s;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
}
.wrapper-banner button span {
  position: absolute;
  display: block;
}
.wrapper-banner button span:nth-child(1) {
  height: 1px;
  width: max(100px, 11vw);
  top: 0px;
  left: -200px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #71fff3);
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
  animation: span1 2s linear infinite;
  animation-delay: 1.3s;
}

@keyframes span1 {
  0% {
    left: -200px;
  }
  100% {
    left: 200px;
  }
}
.wrapper-banner button span:nth-child(2) {
  height: 70px;
  width: 1px;
  top: -70px;
  right: 0px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #71fff3);
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  animation: span2 2s linear infinite;
  animation-delay: 2.8s;
}
@keyframes span2 {
  0% {
    top: -70px;
  }
  100% {
    top: 70px;
  }
}
.wrapper-banner button span:nth-child(3) {
  height: 1px;
  width: max(100px, 11vw);
  right: -200px;
  bottom: 0px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), #71fff3);
  border-top-left-radius: 1px;
  border-bottom-left-radius: 1px;
  animation: span3 2s linear infinite;
  animation-delay: 3.5s;
}
@keyframes span3 {
  0% {
    right: -200px;
  }
  100% {
    right: 200px;
  }
}

.wrapper-banner button span:nth-child(4) {
  height: 50px;
  width: 1px;
  bottom: -70px;
  left: 0px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), #71fff3);
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
  animation: span4 2s linear infinite;
  animation-delay: 4.2s;
}
@keyframes span4 {
  0% {
    bottom: -70px;
  }
  100% {
    bottom: 70px;
  }
}

.wrapper-banner button:hover {
  box-shadow: 0 0 0 15px rgba(19, 28, 45, 0);
  animation: pulsar 1s;
  /* color:  #71fff3; */
}
@keyframes pulsar {
  0% {
    box-shadow: 0 0 0 0 #2feabb;
  }
}

@media (max-width: 700px) {
  /*buton inicial*/
  .wrapper-banner {
    top: 10vw;
    left: 52%;
    width: fit-content;
    height: auto;
  }
  .wrapper-banner button {
    width: 25vw;

    height: 28px;

    font-size: 3vw;
  }
}
@media (max-width: 600px) {
  .wrapper-banner {
    top: 12vw;
    left: 50%;
    width: fit-content;
    height: auto;
  }
  .wrapper-banner button {
    height: 22px;

    font-size: 2.5vw;
  }
}
@media (max-width: 500px) {
  /*buton inicial*/
  .wrapper-banner {
    top: 13.5vw;
    left: 50%;
  }
}
@media (max-width: 450px) {
  .wrapper-banner button {
    width: 25vw;

    height: 17px;

    font-size: 2.5vw;
  }
}

.jobs-text{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content:center;
  margin-top: 5%;
  font-size: 1.5vw;
  text-align: center;
  font-weight: 200; 
  color: rgb(255, 255, 255);
}

/*animação*/
 .home-painel-banner-content-infos .jobs-text div:nth-child(1){
   margin-right: 3%;
 transition-delay: 4s;
  transition-duration: 2000ms;
} 
 .home-painel-banner-content-infos .jobs-text div:nth-child(2){
   margin-right: 3%;
 transition-delay: 4s;
  transition-duration: 2500ms;
} 
 .home-painel-banner-content-infos .jobs-text div:nth-child(3){
  transition-delay: 4s;
  transition-duration: 3000ms;
} 


.icons-home ul li:nth-child(1){
   transition-delay: 3s;
  transition-duration: 2000ms;
  
}
.icons-home ul li:nth-child(2){
   transition-delay: 3s;
  transition-duration: 2500ms;
  
}
.icons-home ul li:nth-child(3){
   transition-delay: 3s;
  transition-duration: 3000ms;
  
}
         
</style>
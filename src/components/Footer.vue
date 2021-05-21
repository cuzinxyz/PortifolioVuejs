<template>
  <footer>
    <div>
      <section id="contato" class="footer-titles">
        <h1
          v-scrollanimation
          data-aos="fade-right"
          data-aos-duration="1000"
          style="transition-delay: 1.3s"
        >
          Obrigado por verificar meu site!
        </h1>

        <h2
          v-scrollanimation
          data-aos="fade-right"
          style="transition-delay: 1.3s"
        >
          // É um trabalho em andamento, por isso volte sempre!
        </h2>
      </section>
      <section class="flexbox">
        <div
          class="list-link"
          data-aos="fade-up"
          style="transition-delay: 1.5s; transition-duration: 2000ms"
        >
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/henrique-rossi-4171b11a2/"
                target="_blank"
              >
                <i class="fa fa-linkedin" :class="icon"></i>
                <span>Linkedin </span></a
              >
            </li>
            <li>
              <a href="https://github.com/Henrique-Rossi" target="_blank">
                <i class="fa fa-github" :class="icon"> </i>
                <span>GitHub</span></a
              >
            </li>
            <li>
              <a href="https://www.instagram.com/gamedevhrv/" target="_blank">
                <i class="fa fa-instagram" :class="icon"> </i>
                <span>Instagram</span></a
              >
            </li>
          </ul>
        </div>
        <div
          class="message"
          data-aos="fade-up"
          data-aos-duration="4000"
          style="transition-delay: 1s; transition-duration: 2000ms"
        >
          <span>Iniciar um projeto?</span>
        </div>
      </section>
    </div>

     <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div> 
  </footer>
</template>

<script>
export default {
  computed: {
    icon() {
      return "fa fa-linkedin,fa fa-github,fa-instagram";
    },
  },
};
</script>

<style>
footer {
  width: 100%;
  height: 70vh;

  margin-top: 6.5%;
}
.footer-titles {
  display: block;
  text-align: center;
  width: 100%;

  /* opacity: 0; */
}
.footer-titles h1 {
  font-size: calc(1em + 3vw);
  font-weight: 900;
  color: #71fff3;
}
.footer-titles h2 {
  margin-top: 2%;
  font-size: calc(1em + 1vw);
  color: #a6bed0;
}

.flexbox {
  font-weight: 600;
  margin-top: 100px;
  width: 100%;

  display: flex;
  justify-content: center;
  font-size: calc(1em + 1vw);
}
.list-link {
  width: 50%;
}
.list-link ul {
  display: flex;

  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.list-link li {
  width: 100%;
  list-style: none;
  padding: 10px;
}
.list-link i {
  margin-right: 5%;
  margin-left: 55%;
  font-size: 3rem;
}

.list-link a {
  color: #2feabb;
  text-decoration: none;
  padding: 0;
  margin: 0;
}
.message {
  color: #2feabb;

  padding-left: 3%;
  display: flex;
  justify-content: left;
  align-items: center;

  width: 50%;
}


/*animação*/
.before-enter {
  opacity: 0;
}

.enter {
  position: relative;
  overflow: hidden;
  opacity: 1;

  transform: translateX(0px);
}
.enter:after {
  content: "";

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #71fff3;
  transform: translateX(-100%);
  animation: enlargeBlock 0.5s 1s both, revealBlock 0.5s 1.5s both;
}

.enter:nth-child(2):after {
  content: "";

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #a6bed0;
  transform: translateX(-100%);
  animation: enlargeBlock 0.5s 1s both, revealBlock2 0.5s 1.5s both;
}

.text-block-sub {
  position: relative;
  overflow: hidden;
}

@keyframes enlargeBlock {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@keyframes revealBlock {
  from {
    transform: translateX(5%);
  }
  to {
    transform: translateX(80%);
    opacity: 0;
  }
}

@keyframes revealBlock2 {
  from {
    transform: translateX(10%);
  }
  to {
    transform: translateX(80%);
    opacity: 0;
  }
}
@media (max-width: 900px) {
  .footer-titles h1 {
    font-size: calc(1em + 6vw);
  }
  .footer-titles h2 {
    font-size: calc(1em + 0.8vw);
    margin-top: 6%;
  }
  .flexbox {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-content: center;
    margin-bottom: 5%;
  }

  .list-link {
    margin-top: 8%;

    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    font-size: calc(1em + 3vw);
  }
  .list-link ul {
   width: 60%;
    flex-direction: column;
  }
 
  .list-link i {
    margin-left: 0%;
  }

  .message {
    margin-top: -5%;
    padding-left: 0%;
    font-size: calc(1em + 7.5vw);

    display: flex;
    justify-content: center;
    align-content: center;

    width: 100%;
  }
}
@media (max-width: 500px) {
  footer {
    margin-top: 0%;
  }
  .footer-titles {
    margin-top: 23%;
    display: flex;
    flex-direction: column;
  }

  .message {
    padding-left: 0%;
    font-size: calc(1em + 5vw);
  }
  .list-link {
    font-size: calc(1em + 2vw);
  }
  .list-link i {
    margin-right: 10%;
    margin-left: 9%;
  }
  /* .list-link i {
    margin-left: 25%;
  } */
}


/* .area{
 position: relative;
 width: 100%;
 overflow: hidden;
  
}*/
.circles{
position: absolute;

  left: 0;
  
  width: 100%;
  margin-top: -15vw;
  z-index: -1;
 
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 1px;
  height: 1px;
  background: rgba(47, 234, 187, 0.171);
  animation: animate 15s linear infinite;
 
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 1s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

/* .circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 3s;
} */

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

/* .circles li:nth-child(10){
  left: 85%;
  width: 110px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
} */



@keyframes animate {

  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      /* border-radius: 0; */
  }

  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      /* border-radius: 50%; */
  }

}
@media only screen and (max-width: 1000px) {
  .circles{
   width: 80%;
     
    }


  .circles li:nth-child(6){
    left: 75%;
   
    
  }
  .circles li:nth-child(10){
    left: 80%;
   
    
  }
.circles{


  margin-top: -35vw;
  
 
}
  
}

</style>
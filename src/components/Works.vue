<template>
  <div class="work">
    <div class="flex-container-childs-previa">
      <h1>{{ work.title }}</h1>
      <!-- <img src="../assets/img/todoreacrt.png" alt="">  -->
      
        <img loading="lazy" :src="require(`@/assets/static/${work.img}`)" />
      

      <!-- <img :src=work.img :alt="work.title" /> -->
      <p>{{ work.legend }}</p>
      <div class="flex-container-window-info">
        <h2>+ Informações</h2>
        <div class="flexbox-container-window-info">
          <ul>
            <li>{{ work.framework }}</li>
            <li>{{ work.developed }}</li>
            <li>{{ work.language }}</li>
            <li>
              <a :href="work.github" target="_blank">
                <i class="fa fa-github" :class="icon"> </i>
              </a>
            </li>
          </ul>
          <div class="flex-container-window-info-icons">
            <img :src="require(`@/assets/static/svg/${work.icons}`)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    work: { type: Object },
  },
};
</script>

<style >
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
.work {
  box-sizing: border-box;
}
.flex-container-childs-previa {
  text-align: center;
  color: #2feabb;
}
.flex-container-childs-previa img {
  width: 75%;
  height: 250px;
  border: #2feabb36 1px solid;
  border-radius: 16px;
  box-shadow: 0 0 5px #2feabb;
}

.flex-container-childs-previa h1 {
  text-align: center;
  margin: 2%;
  font-size: 2.5em;
  font-weight: 900;
  height: 5vh;
}

.flex-container-childs-previa p {
  margin: 5%;
  text-align: left;
  color: rgb(211, 208, 208);
  font-weight: 600;
  height: 80px;
}
.flex-container-childs-previa .flex-container-window-info {
  margin-top: -7%;
  text-align: left;
  height: 55%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  color: #2feabb;
  width: 100%;
  position: absolute;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  transition: all 0.8s ease-out;
  box-shadow: inset 0 0 5px #2feabb;
}

.flex-container-childs-previa .flex-container-window-info ul,
.flex-container
  .flex-container-childs
  .flex-container-childs-previa
  .flex-container-window-info
  li {
  margin-left: 5%;
  text-decoration: none;
}

.flex-container-childs-previa .flex-container-window-info h2 {
  padding: 10px;
  font-weight: 900;
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 5%;
}
.flexbox-container-window-info {
  display: flex;
  width: 100%;
}
.flexbox-container-window-info ul {
  font-weight: 900;
  width: 60%;
}
.flex-container-window-info li:nth-child(4) {
  list-style: none;

  font-size: 3rem;
}
.flex-container-window-info li:nth-child(4) i:hover {
  color: white;
}

.flex-container-childs-previa .flex-container-window-info:hover {
  margin-top: -33%;
}
.flex-container-window-info-icons {
  margin-top: -5%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-container-window-info-icons img {
  padding: 5%;
  width: 100%;
  height: 130px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 0 5px #2feabb;
}

@media (max-width: 600px) {
  
  .flex-container-childs-previa p {
    height: 10vh;
  }
   .flex-container-childs:nth-child(2) h1 {
  
  font-size: 1.2em;


 
}
 .flex-container-childs-previa .flex-container-window-info:hover {
    margin-top: -60%;
  }

}
@media (max-width: 510px) {
 
  .flex-container-childs-previa .flex-container-window-info:hover {
    margin-top: -65%;
  }

  .flex-container-window-info-icons img {
    height: 100px;
  }
   .flex-container-childs-previa{
    margin-top: 8%;
  } 
 
}
@media (max-width: 480px) {
 .flex-container-childs-previa .flex-container-window-info:hover {
    margin-top: -50%;
  }
  
}
</style>

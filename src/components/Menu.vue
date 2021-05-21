<template>
  <div>
    <header class="max-header">
      <div class="container">
        <div class="logo">
          <a  href="#home"  v-smooth-scroll>
            <img src="@/assets/static/svg/logo.svg" alt="" />
          </a>
        </div>
        <div class="menu">
          <div class="hamburguer max-hamburguer"></div>
        </div>
        <nav class="nav-bar max-nav ">
          <ul>
            <li><a href="#home"  v-smooth-scroll>HOME</a></li>
            <li><a href="#sobre"  v-smooth-scroll="{offset: -80}">SOBRE</a></li>
            <li><a href="#portifolio"  v-smooth-scroll="{offset: -100}" >PORTIFOLIO</a></li>
            <li><a href="#contato"  v-smooth-scroll="{ duration: 2000}">CONTATO</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import Scripts from "../util/menuResponsivo";

export default {
 
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
header {
  top: 0;
  position: fixed;
  z-index: 999;
  width: 100%;

  border-bottom: #2feabb 1px solid;
  transition: all 0.5s ease-out;
}
.max-header {
  background-color: rgba(17, 22, 42);
  height: 100px;
}

.min-header {
  background-color: rgba(17, 22, 42);
  height: 100px;
}

.container {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 60px;

  display: grid;
  /*centraliza*/
  align-content: center;
  /*centraliza*/
  grid-template-areas: "lgo .. nav ";
  grid-template-columns: auto 1fr auto;
}
.logo {
 grid-area: lgo;
}
.logo img {
  width: 200px;
}
.nav-bar {
  grid-area: nav;

  display: grid;
  align-content: center;
  font-weight: 600;
}
.nav-bar ul {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px; /*espaço entre os elementos*/
}

.nav-bar a {
  position: relative;
  text-transform: uppercase;

  transition: all 0.5s ease-out;
}

.nav-bar a::before {
  content: "";
  width: 100%;
  position: absolute;
  top: -10px;
  left: 0;
  height: 2px;
  background-color: currentColor; /*pega a cor do elemento pai*/
  transform-origin: left;
  transform: scaleX(0); /*tamanh da linha */
  transition: all 0.3s ease-out;
}
.nav-bar a:hover::before {
  transform: scaleX(1);
}
.nav-bar a::after {
  content: "";
  width: 100%;
  position: absolute;
  bottom: -10px;
  left: 0;
  height: 2px;
  background-color: currentColor; /*pega a cor do elemento pai*/
  transform-origin: right;
  transform: scaleX(0); /*tamanh da linha */
  transition: all 0.3s ease-out;
}
.nav-bar a:hover::after {
  transform: scaleX(1);
}

.max-nav a {
  font-size: 1em;
  color: #2feabb;
}

.min-nav a {
  font-size: 0.875em;
 color: #2feabb;
}

@media (max-width: 800px) {
  .max-header {
    height: 80px;
  }
  .min-header {
    height: 80px;
  }
  .container {
    position: relative;
    padding: 0 20px;
    grid-template-areas: "lgo ...   mnu ";
  }

  .logo img {
    width: 150px;
     
  }
  /* .max-logo img {
            width: 200px;
        }
        .min-logo img{
            width: 100px;
        } */
  .menu {
    grid-area: mnu;
    display: grid;
    align-content: center;
  }
  .hamburguer {
    position: relative;
    width: 28px;
    height: 3px;
    transition: all 0.5s ease-out;
     background-color: #2feabb;
  }
  /*pseudclass que copia a class pai ,hamburguer por isso de usar 100%*/
  .hamburguer::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-out;
         background-color: #2feabb;
  }
  .hamburguer::after {
    content: "";
    position: absolute;
    top: 8px;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-out;
    background-color: #2feabb;
  }
  .max-hamburguer,
  .max-hamburguer::before,
  .max-hamburguer::after {
      background-color: #2feabb;
    
  }
  .min-hamburguer,
  .min-hamburguer::before,
  .min-hamburguer::after {
     background-color: #2feabb;
    
  }
  .close-btn {
    width: 32px;
    transform: rotateZ(45deg);
  }
  .close-btn::before,
  .close-btn::after {
    top: 0;
    transform: rotateZ(90deg);
  }
  .nav-bar {
    position: absolute;
    margin-top: 5%;
    left: 0;
    width: 100%;
    
    opacity: 0.9;
     background-color: rgba(17, 22, 42);
    transform: translateX(-100%);
    transition: all 0.5s ease-out;
  }
  .max-nav {
    top: 80px;
    height: calc(100vh - 80px);
    /* height: 50vh;*/
  }
  .min-nav {
    top: 80px;
    height: calc(100vh - 80px);
    /* height: 50vh;*/
  }
  .menu-opened {
    transform: translateX(0);
  }
  .nav-bar ul {
    justify-content: center;
    grid-auto-flow: row;
    grid-gap: 80px;
  }
  .nav-bar li {
    text-align: center;
  }
  .min-nav a {
    font-size: 1em;
    color: #2feabb;
  }
}
@media (max-width:500px) {
  
.container {

  height: 100px;
  padding: 0 10px;
}
.nav-bar {
    margin-top: 0%;

  }

}

</style>>
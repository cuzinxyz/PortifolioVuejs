<template>
  <div class="painel-works">
    <!-- <h1>Web  </h1> -->
    <div
      class="card-container"
      v-for="Mobile in Mobile"
      :key="Mobile.title"
      :Mobile="Mobile"
       data-aos="fade-up"
    >
      <!-- <div class="img-icon">
          <img class="pro" :src="require(`@/assets/static/svg/${work.icons}`)" />
    </div> -->

      <div class="img-painel">
        <img
          class="round"
          loading="lazy"
          :src="require(`@/assets/static/${Mobile.img}`)"
        />
      </div>
      <h3>{{ Mobile.title }}</h3>

      <h6></h6>
      <p>{{ Mobile.legend }}</p>
      <ul class="social-icons">
        <li>
          <a :href="Mobile.github" target="blank"><i class="fa fa-github"></i></a>
        </li>
        <!-- <li>
          <a :href="Mobile.deploy" target="blank"><i class="fa fa-eye"></i></a>
        </li> -->
      </ul>
      <div class="skills">
        <h6>Skills</h6>
        <ul>
          <li v-for="skills in Mobile.arraySkills" :key="skills">
            {{ skills }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      Mobile: [
        {
          title: "ReactNative Crud Reducer",
          img: "alogo.webp",
          legend: "Aplicação de Cadastro de Usuário (CRUD)",
          framework: "Desenvolvido em .Net",
          developed: "Desenvolvido na Faculdade",
          language: "Linguagem:C# e SqlServer",

          github: "https://github.com/Henrique-Rossi/ReactNativeCrudReducer",
          icons: "net.svg",
          arraySkills: [
            "React Native",
            "Context API",
            "Hooks useReducer",
            "Rotas & Parâmetros",
          
          ],
        },
      ],
    };
  },
};
</script>


<style>

</style>
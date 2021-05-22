<template>
  <div class="painel-works">
    <!-- <h1>Web  </h1> -->
    <div
      class="card-container"
      v-for="desktop in desktop"
      :key="desktop.title"
      :desktop="desktop"
      data-aos="fade-up"
    >
      <!-- <div class="img-icon">
          <img class="pro" :src="require(`@/assets/static/svg/${work.icons}`)" />
    </div> -->

      <div class="img-painel">
        <img
          class="round"
          loading="lazy"
          :src="require(`@/assets/static/${desktop.img}`)"
        />
      </div>
      <h3>{{ desktop.title }}</h3>

      <h6></h6>
      <p>{{   desktop.legend }}</p>
      <ul class="social-icons">
        <li>
          <a :href="desktop.github" target="blank"><i class="fa fa-github"></i></a>
        </li>
        <!-- <li>
          <a :href="desktop.deploy"><i class="fa fa-eye"></i></a>
        </li> -->
      </ul>
      <div class="skills">
        <h6>Skills</h6>
        <ul>
          <li v-for="skills in desktop.arraySkills" :key="skills">{{ skills }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desktop: [
        {
          title: "Sistema de Gestão de biblioteca",
          img: "biblioteca.webp",
          legend:
            "Sistema de Gestão de biblioteca,feito com finalidade de automatizar as tarefas  e digitalizar  trabalhos manuais.",
          framework: "Desenvolvido em .Net",
          developed: "Desenvolvido na Faculdade",
          language: "Linguagem:C# e SqlServer",
          
          github: "https://github.com/Henrique-Rossi/BibliotecaApp",
          icons: "net.svg",
           arraySkills: [
            "C#",
            ".Net",
            "SQL Server"
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>
<template>
  <div>
    <!-- Renderiza o Navbar apenas se não estiver na página de login ou na página de registro -->
    <NavbarComponent v-if="!isLoginPage && !isRegisterPage" />
    <!-- Renderiza o conteúdo da rota atual -->
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent 
  },
  data() {
    return {
      isLoginPage: false,
      isRegisterPage: false,
    };
  },
  created() {
    // Verifica a rota atual quando o componente é criado
    this.checkIfSpecialPage();
  },
  watch: {
    // Assista a mudanças na rota para verificar se é a página de login ou registro
    $route() {
      this.checkIfSpecialPage();
    },
  },
  methods: {
    checkIfSpecialPage() {
      // Verifica se a rota atual corresponde à página de login ou registro
      this.isLoginPage = this.$route.path === '/login';
      this.isRegisterPage = this.$route.path === '/register';
    },
  },
};
</script>

<style>

</style>

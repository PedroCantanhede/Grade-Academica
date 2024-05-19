<template>
  <div class="min-h-screen flex flex-col">
    <!-- Renderiza o Navbar apenas se não estiver na página de login ou na página de registro -->
    <NavbarComponent v-if="!isLoginPage && !isRegisterPage" />
    
    <!-- Renderiza o conteúdo da rota atual -->
    <div class="flex-grow">
      <router-view/>
    </div>
    
    <FooterComponent v-if="!isLoginPage && !isRegisterPage" />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { initFlowbite } from 'flowbite';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
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
  mounted() {
    // Inicializa os componentes Flowbite em toda a aplicação após o componente ser montado
    initFlowbite();
  }
};
</script>

<style>
/* Estilos globais, se necessário */
</style>

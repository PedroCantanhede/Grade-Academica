<template>
    <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-20">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Período Acadêmico</h2>
      <form @submit.prevent="handleSubmit" class="lg:py-12">
        <div class="flex flex-col mb-4">
          <label for="hora" class="text-sm mb-1">Hora:</label>
          <input type="text" id="hora" v-model="formData.hora" class="py-2 px-3 border rounded-md">
        </div>
        <div class="flex flex-col mb-4">
          <label for="disciplina" class="text-sm mb-1">Disciplina:</label>
          <input type="text" id="disciplina" v-model="formData.disciplina" class="py-2 px-3 border rounded-md">
        </div>
        <div class="flex flex-col mb-4">
          <label for="professor" class="text-sm mb-1">Professor:</label>
          <input type="text" id="professor" v-model="formData.professor" class="py-2 px-3 border rounded-md">
        </div>
        <div class="flex flex-col mb-4">
          <label for="sala" class="text-sm mb-1">Sala:</label>
          <input type="text" id="sala" v-model="formData.sala" class="py-2 px-3 border rounded-md">
        </div>
        <button type="submit" class="py-2 px-4 text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center white:bg-primary-600 white:hover:bg-primary-700 white:focus:ring-primary-800">Adicionar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminPage",
    data() {
      return {
        formData: {
          hora: "",
          disciplina: "",
          professor: "",
          sala: ""
        }
      };
    },
    methods: {
      handleSubmit() {

        console.log("Dados enviados ao Back:", this.formData);
        
        this.formData = {
          hora: "",
          disciplina: "",
          professor: "",
          sala: ""
        };
      }
    }
  };
  </script>
  
  <style></style>
  
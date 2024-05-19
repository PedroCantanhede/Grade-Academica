<template>
  <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-28">
    <div class="flex flex-col items-center justify-center lg:py-10">
      <img src="../../assets/img/cefet-logo.png" alt="" class="logo-cefet">
    </div>
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      <div
        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
      >
        Caso queira acessar o portal do aluno.
        <a
          href="https://alunos.cefet-rj.br/"
          target="_blank"
          class="font-semibold text-blue-900"
          ><span class="absolute inset-0" aria-hidden="true"></span>Clique aqui
          <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Bem-vindo ao portal do CEFET/RJ - Maria da Graça!
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Aqui você poderá acompanhar a grade acadêmica de acordo com seu período,
        contendo as disciplinas, professores e salas.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6 pb-48">
        <button
          href="#"
          class="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Acompanhar <span aria-hidden="true">→</span></button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
.logo-cefet {
    width: 22rem;
  }
</style>

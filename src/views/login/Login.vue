<template>
  <section class="lg:py-24">
    <div class="flex flex-col items-center justify-center px-6 py-8">
      <router-link to="/">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 white:text-white"
        >
          <img
            src="../../assets/img/cefet-logo.png"
            alt=""
            class="logo-cefet"
          />
        </a>
      </router-link>

      <div
        class="w-full bg-white rounded-lg shadow white:border md:mt-0 sm:max-w-md xl:p-0 white:bg-gray-800 white:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl white:text-white"
          >
            Entre na sua conta
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 white:text-white"
                >E-mail</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 white:text-white white:focus:ring-blue-500 white:focus:border-blue-500"
                placeholder="Informe o seu e-mail"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 white:text-white"
                >Senha</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 white:text-white white:focus:ring-blue-500 white:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 white:bg-gray-700 white:border-gray-600 white:focus:ring-primary-600 white:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="remember"
                    class="text-gray-500 white:text-gray-300"
                    >Lembrar-me</label
                  >
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline white:text-primary-500"
                >Esqueceu a senha?</a
              >
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center white:bg-primary-600 white:hover:bg-primary-700 white:focus:ring-primary-800"
            >
              Entrar
            </button>
            <p class="text-sm font-light text-gray-500 white:text-gray-400">
              Não possui uma conta ainda?
              <RouterLink to="/register"
                ><a
                  href="#"
                  class="font-medium text-primary-600 hover:underline white:text-primary-500"
                  >Registrar</a
                ></RouterLink
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style>
.logo-cefet {
  width: 18rem;
}
</style>

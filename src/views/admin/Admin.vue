<template>
  <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-20">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400"
    >
      <caption
        class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white light:text-white light:bg-gray-800"
      >
        Todos os professores
        <p class="mt-1 text-sm font-normal text-gray-500 light:text-gray-400">
          Browse a list of Flowbite products designed to help you work and play,
          stay organized, get answers, keep in touch, grow your business, and
          more.
        </p>
      </caption>
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Professor</th>
          <th scope="col" class="px-6 py-3">Disciplina</th>
          <th scope="col" class="px-6 py-3">Sala/Bloco</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Editar</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Editar</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b light:bg-gray-800 light:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
          >
          <div class="flex min-w-0 gap-x-5">
              <img
                class="h-11 w-11 flex-none rounded-full bg-gray-50"
                src=""
                alt=""
              />
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  Profº. Alexandre
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                  alexandre20@hotmail.com
                </p>
              </div>
            </div>
          </th>
          <td class="px-6 py-4">Silver</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">$2999</td>
          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-blue-600 light:text-blue-500 hover:underline"
              >Editar</a
            >
          </td>
        </tr>
        <tr class="bg-white border-b light:bg-gray-800 light:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
          >
            Microsoft Surface Pro
          </th>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-blue-600 light:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
        <tr class="bg-white light:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
          >
            Magic Mouse 2
          </th>
          <td class="px-6 py-4">Black</td>
          <td class="px-6 py-4">Accessories</td>
          <td class="px-6 py-4">$99</td>
          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-blue-600 light:text-blue-500 hover:underline"
              >Editar</a
            >
          </td>
          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-blue-600 light:text-blue-500 hover:underline"
              >Excluir</a
            >
          </td>
        </tr>
      </tbody>
    </table>
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
        sala: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("Dados enviados ao Back:", this.formData);

      this.formData = {
        hora: "",
        disciplina: "",
        professor: "",
        sala: "",
      };
    },
  },
};
</script>

<style></style>

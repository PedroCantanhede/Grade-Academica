<template>
  <div class="py-32 sm:py-48 lg:py-20 px-4 sm:px-6 lg:px-12">
    <!-- Header -->
    <div class="w-full mb-1">
      <div class="mb-4">
        <h1
          class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
        >
          Todos os professores
        </h1>
      </div>
      <div class="sm:flex">
        <div
          class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700"
        >
          <form class="lg:pr-3" action="#" method="GET">
            <label for="professores-search" class="sr-only">Buscar</label>
            <div class="relative mt-1 lg:w-64 xl:w-96">
              <input
                type="text"
                name="search"
                id="professores-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Buscar"
              />
            </div>
          </form>
          <div class="flex pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
            <a
							href="#"
							class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							<svg
								class="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
									clip-rule="evenodd"></path></svg>
						</a>
            <a
              href="#"
              class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
          <!-- Botão para abrir o modal -->
          <button
            type="button"
            @click="openModal"
            class="inline-flex items-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <svg
              class="w-5 h-5 mr-2 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Adicionar
          </button>
        </div>
      </div>
    </div>

    <!-- Modal toggle -->
    <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="hidden" type="button">
      Abrir Modal
    </button>

    <!-- Main modal -->
    <div
      v-if="modal"
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"
    >
      <div class="relative p-4 w-full max-w-xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Adicionar Professor
            </h3>
            <button type="button" @click="closeModal" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                ></path></svg>
              <span class="sr-only">Fechar modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
            <form @submit.prevent="addProfessor">
              <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div class="col-span-2">
                  <label for="file_input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
                  <input @change="handleFileUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" accept="image/*">
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
                <div class="col-span-2">
                  <label for="professor" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Professor</label>
                  <input v-model="formData.professor" type="text" id="professor" placeholder="Professor" class="block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-gray-500 dark:focus:border-gray-600" />
                </div>
                <div class="col-span-2">
                  <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                  <input v-model="formData.email" type="email" id="email" placeholder="E-mail" class="block w-full px-4 py-2 rounded
                  -lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-gray-500 dark:focus:border-gray-600" />
                </div>
              </div>
              <!-- Divisor -->
              <hr class="my-4 border-gray-300 dark:border-gray-600" />
              <button type="submit" class="inline-flex items-center bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Adicionar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabela para exibir professores existentes -->
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Todos os professores
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Lista de todos os professores com seus respectivos e-mails.
        </p>
      </caption>
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Foto</th>
          <th scope="col" class="px-6 py-3">Professor</th>
          <th scope="col" class="px-6 py-3">E-mail</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Editar</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Excluir</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop para exibir cada professor -->
        <tr v-for="(professor, index) in professores" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-4 py-3">
            <img v-if="professor.foto" :src="professor.foto" alt="Foto do professor" class="w-12 h-12 object-cover rounded-full" />
            <span v-else>Nenhuma foto</span>
          </td>
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ professor.professor }}
          </td>
          <td class="px-6 py-4">{{ professor.email }}</td>
          <td class="px-6 py-4 text-right">
            <button @click="editProfessor(index)" class="flex items-center font-medium text-blue-600 light:text-blue-500 hover:underline">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
              </svg>
              Editar
            </button>
          </td>
          <td class="px-6 py-4 text-right">
            <button @click="deleteProfessor(index)" class="flex items-center font-medium text-red-600 light:text-red-500 hover:underline">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9 2a1 1 
                01 2.414 9 9v10a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h3zm3 0a1 1 0 011 1v10a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1h3z" clip-rule="evenodd" />
              </svg>
              Excluir
            </button>
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
      professores: [
        { professor: "João Silva", email: "joao.silva@example.com", foto: "https://randomuser.me/api/portraits/men/7.jpg" },
        { professor: "Maria Souza", email: "maria.souza@example.com", foto: "https://randomuser.me/api/portraits/women/8.jpg" },
      ],
      modal: false,
      formData: {
        professor: "",
        email: "",
        foto: null,
      },
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    addProfessor() {
      if (this.formData.professor && this.formData.email) {
        this.professores.push({ ...this.formData });
        this.formData.professor = "";
        this.formData.email = "";
        this.formData.foto = null; // Reset foto after adding professor
        this.closeModal();
      }
    },
    editProfessor(index) {
      const professor = this.professores[index];
      this.formData = { ...professor };
      this.openModal();
      this.deleteProfessor(index);
    },
    deleteProfessor(index) {
      this.professores.splice(index, 1);
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Assuming you're storing the image as base64 encoded string
        const reader = new FileReader();
        reader.onload = (e) => {
          this.formData.foto = e.target.result
          ;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style>
</style>

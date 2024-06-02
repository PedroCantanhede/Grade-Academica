<template>
  <div class="bg-white">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">CEFET-RJ</span>
              <router-link to="/">
                <img class="h-8 w-auto" src="../assets/img/logo.png" alt="" />
              </router-link>
            </a>
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              @click="toggleMobileMenu"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Abrir menu principal</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <router-link to="/">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Home</a>
            </router-link>
            <router-link to="/grade-academica">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Grade Acadêmica</a>
            </router-link>
            <router-link to="/optativas">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Optativas</a>
            </router-link>
            <!-- Admin Dropdown Desktop -->
            <div class="relative" @click="toggleAdminDropdown">
              <a href="#" class="flex items-center text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                <span>Admin</span>
                <svg v-if="!adminDropdownOpen" class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <svg v-else class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
              </a>
              <div v-if="adminDropdownOpen" class="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                <router-link to="/admin/professor">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Professor</a>
                </router-link>
                <router-link to="/admin/disciplina">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Disciplina</a>
                </router-link>
                <router-link to="/admin/grade">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Grade</a>
                </router-link>
                <router-link to="/admin/sala">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sala</a>
                </router-link>
              </div>
            </div>
            <!-- Fim Admin Dropdown Desktop -->
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <router-link to="/login">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Entrar<span aria-hidden="true">&rarr;</span></a>
            </router-link>
          </div>
        </nav>
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
          <!-- Mostrar/ocultar com base no estado -->
          <div class="fixed inset-0 z-50 bg-gray-800 bg-opacity-50" @click="toggleMobileMenu"></div>
          <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">CEFET/RJ</span>
                <router-link to="/">
                  <img class="h-8 w-auto" src="../assets/img/logo.png" alt="" />
                </router-link>
              </a>
              <button
                type="button"
                @click="toggleMobileMenu"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Fechar menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <router-link to="/">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                  </router-link>
                  <router-link to="/grade-academica">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Grade Acadêmica</a>
                  </router-link>
                  <router-link to="/optativas">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Optativas</a>
                  </router-link>
                  <!-- Admin Dropdown Mobile -->
                  <div class="relative" @click="toggleAdminDropdownMobile">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer flex items-center">
                      <span>Admin</span>
                      <svg v-if="!adminDropdownOpenMobile" class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                      <svg v-else class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                    <div v-if="adminDropdownOpenMobile" class="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <router-link to="/admin/professor">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Professor</a>
                      </router-link>
                      <router-link to="/admin/disciplina">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Disciplina</a>
                      </router-link>
                      <router-link to="/admin/grade">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Grade</a>
                      </router-link>
                      <router-link to="/admin/sala">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sala</a>
                      </router-link>
                    </div>
                  </div>
                  <!-- Admin Dropdown Mobile -->
                </div>
                <div class="py-6">
                  <router-link to="/login">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Entrar</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      adminDropdownOpen: false,
      adminDropdownOpenMobile: false,
      mobileMenuOpen: false
    };
  },
  methods: {
    toggleAdminDropdown() {
      this.adminDropdownOpen = !this.adminDropdownOpen;
    },
    toggleAdminDropdownMobile() {
      this.adminDropdownOpenMobile = !this.adminDropdownOpenMobile;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
};
</script>

<style scoped></style>

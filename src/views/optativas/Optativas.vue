<template>
    <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-20">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="min-w-0 flex-1">
          <h2
            class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
          >
            Optativas do Semestre
          </h2>
          <div
            class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
          >
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
  
              Sistemas de Informação
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <svg
                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                  clip-rule="evenodd"
                />
                <path
                  d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"
                />
              </svg>
              Bacharelado
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <svg
                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                  clip-rule="evenodd"
                />
              </svg>
              Ano letivo 2024.1
            </div>
          </div>
        </div>
        <div class="mt-5 flex lg:ml-4 lg:mt-0">
          <span class="sm:ml-3">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="-ml-0.5 mr-1.5 h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
  
              Baixar
            </button>
          </span>
        </div>
      </div>
  
      <!-- GRADE TABELA -->
      <div class="relative overflow-x-auto lg:py-12">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 white:text-gray-400"
        >
          <thead class="text-gray-200 bg-blue-900 white:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">Hora</th>
              <th scope="col" class="px-6 py-3">Segunda</th>
              <th scope="col" class="px-6 py-3">Terça</th>
              <th scope="col" class="px-6 py-3">Quarta</th>
              <th scope="col" class="px-6 py-3">Quinta</th>
              <th scope="col" class="px-6 py-3">Sexta</th>
              <th scope="col" class="px-6 py-3">Sábado</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b white:bg-gray-800 white:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap white:text-white"
              >
                18:00 - 18:50
              </th>
              <td class="px-6 py-4">Eletricidade Básica</td>
              <td class="px-6 py-4">Física</td>
              <td class="px-6 py-4">Leitura e Produção de Textos Acadêmicos</td>
              <td class="px-6 py-4">Algoritmo Estruturado</td>
              <td class="px-6 py-4">Fundamentos Matemática</td>
              <td class="px-6 py-4">-</td>
            </tr>
            <tr class="bg-white border-b white:bg-gray-800 white:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap white:text-white"
              >
                18:50 - 19:40
              </th>
              <td class="px-6 py-4">Eletricidade Básica</td>
              <td class="px-6 py-4">Física</td>
              <td class="px-6 py-4">Leitura e Produção de Textos Acadêmicos</td>
              <td class="px-6 py-4">Algoritmo Estruturado</td>
              <td class="px-6 py-4">Fundamentos Matemática</td>
              <td class="px-6 py-4">-</td>
            </tr>
            <tr
              class="bg-gray-50 border-b white:bg-gray-800 white:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap dark:text-blue-900"
              >
                19:40 - 20:00
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td
                class="px-6 py-4 text-bold font-medium dark:text-blue-900 whitespace-nowrap"
              >
                Intervalo
              </td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="bg-white border-b white:bg-gray-800 white:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap white:text-white"
              >
                20:00 - 20:50
              </th>
              <td class="px-6 py-4">Eletricidade Básica</td>
              <td class="px-6 py-4">Física</td>
              <td class="px-6 py-4">Leitura e Produção de Textos Acadêmicos</td>
              <td class="px-6 py-4">Algoritmo Estruturado</td>
              <td class="px-6 py-4">Fundamentos Matemática</td>
              <td class="px-6 py-4">-</td>
            </tr>
            <tr class="bg-white border-b white:bg-gray-800 white:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap white:text-white"
              >
                20:50 - 21:40
              </th>
              <td class="px-6 py-4">Eletricidade Básica</td>
              <td class="px-6 py-4">Física</td>
              <td class="px-6 py-4">Leitura e Produção de Textos Acadêmicos</td>
              <td class="px-6 py-4">Algoritmo Estruturado</td>
              <td class="px-6 py-4">Fundamentos Matemática</td>
              <td class="px-6 py-4">-</td>
            </tr>
            <tr class="bg-white white:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap white:text-white"
              >
                21:40 - 22:30
              </th>
              <td class="px-6 py-4">Eletricidade Básica</td>
              <td class="px-6 py-4">Física</td>
              <td class="px-6 py-4">Leitura e Produção de Textos Acadêmicos</td>
              <td class="px-6 py-4">Algoritmo Estruturado</td>
              <td class="px-6 py-4">Fundamentos Matemática</td>
              <td class="px-6 py-4">-</td>
            </tr>
          </tbody>
        </table>
  
        <ul role="list" class="divide-y divide-gray-100">
          <li class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
              <img
                class="h-12 w-12 flex-none rounded-full bg-gray-50"
                src=""
                alt=""
              />
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  Profº. Alexandre
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                  Eletricidade Básica
                </p>
              </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">Sala A316</p>
              <p class="mt-1 text-xs leading-5 text-gray-500">
                  Bloco A
              </p>
            </div>
          </li>
          <li class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
              <img
                class="h-12 w-12 flex-none rounded-full bg-gray-50"
                src=""
                alt=""
              />
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  Profª. Patrícia Haryella
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                  Física
                </p>
              </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">Sala A316</p>
              <p class="mt-1 text-xs leading-5 text-gray-500">
                Bloco A
              </p>
            </div>
          </li>
          <li class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
              <img
                class="h-12 w-12 flex-none rounded-full bg-gray-50"
                src=""
                alt=""
              />
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  Profª. Alessandra Magalhães
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                  Leitura e Produção de Textos Acadêmicos
                </p>
              </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">Sala A316</p>
              <p class="mt-1 text-xs leading-5 text-gray-500">
                Bloco A
              </p>
            </div>
          </li>
          <li class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
              <img
                class="h-12 w-12 flex-none rounded-full bg-gray-50"
                src=""
                alt=""
              />
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  Profº. Thiago Tuxi
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                  Algoritmo Estruturado
                </p>
              </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">Sala A314</p>
              <p class="mt-1 text-xs leading-5 text-gray-500">
                Bloco A
              </p>
            </div>
          </li>
          <li class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
              <img
                class="h-12 w-12 flex-none rounded-full bg-gray-50"
                src=""
                alt=""
              />
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  Profº. Douglas
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                  Fundamentos Matemática
                </p>
              </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">Sala A316</p>
              <p class="mt-1 text-xs leading-5 text-gray-500">
                Bloco A
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OptativasPage",
  };
  </script>
  
  <style></style>
  
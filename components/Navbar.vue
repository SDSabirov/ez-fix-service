<template>
  <nav
    class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 max-w-screen"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
        <img src="/logo.svg" class="h-8" alt="EZ Fix Service Logo" />
        <span
          class="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-bright-orange"
          >EZ
        </span>
        <span
          class="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-deep-blue"
          >Fix Service</span
        >
      </NuxtLink>

      <!-- Contact Button -->
      <div class="flex md:order-2 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="text-white bg-bright-orange hover:bg-deep-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          <div class="w-full h-full flex space-x-1 md:space-x-2 items-center md:mr-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
            </div>
            <span class="">+1(444)77-77-77</span>
          </div>
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-bright-orange rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <!-- Navigation Links -->
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <NuxtLink
              to="/"
              :class="{
                'text-deep-blue font-bold': route.path === '/',
                'text-bright-orange': route.path !== '/',
              }"
              class="block py-2 px-3 rounded hover:text-deep-blue md:p-0"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              :class="{
                'text-deep-blue font-bold': route.path === '/about',
                'text-bright-orange': route.path !== '/about',
              }"
              class="block py-2 px-3 rounded hover:text-deep-blue md:p-0"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/services"
              :class="{
                'text-deep-blue font-bold': route.path === '/services',
                'text-bright-orange': route.path !== '/services',
              }"
              class="block py-2 px-3 rounded hover:text-deep-blue md:p-0"
              >Services</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/areas"
              :class="{
                'text-deep-blue font-bold': route.path === '/areas',
                'text-bright-orange': route.path !== '/areas',
              }"
              class="block py-2 px-3 rounded hover:text-deep-blue md:p-0"
              >Areas</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/blogs"
              :class="{
                'text-deep-blue font-bold': route.path === '/blogs',
                'text-bright-orange': route.path !== '/blogs',
              }"
              class="block py-2 px-3 rounded hover:text-deep-blue md:p-0"
              >Blogs</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact"
              :class="{
                'text-deep-blue font-bold': route.path === '/contact',
                'text-bright-orange': route.path !== '/contact',
              }"
              class="block py-2 px-3 rounded hover:text-deep-blue md:p-0"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

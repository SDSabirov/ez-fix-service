<template>
    <section class="bg-cover bg-center h-screen flex items-center justify-center text-center relative">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 max-w-2xl mx-auto text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Expert Appliance Repair Service 
        </h1>
        <p class="text-lg md:text-xl mb-6">
          Reliable, fast, and professional repairs for all major luxury appliance brands.
        </p>
        <NuxtLink
          
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-lg transition duration-300"
        >
          Schedule Your Service Today
        </NuxtLink>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional script is required for this hero section.
  </script>
  
  <style scoped>
  section {
    background-image: url('/assets/images/hero1.jpg'); /* Replace with your image URL */
  }
  </style>
  
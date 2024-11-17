<template>
    <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <!-- Background Gradient -->
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.orange.100),theme(colors.orange.200))] opacity-20" />
  
      <!-- Skewed Background Element -->
      <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-gray-100 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
  
      <!-- Content Container -->
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
  
        <!-- Testimonial Content -->
        <figure class="mt-10">
          <blockquote class="text-center text-xl font-semibold text-gray-800 sm:text-2xl">
            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
          </blockquote>
  
          <!-- User Information -->
          <figcaption class="mt-10">
            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
              <div class="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-500">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="text-gray-600">13/11/2024</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  </template>
  
  <script setup></script>
  
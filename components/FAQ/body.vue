<template>
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-deep-blue">Frequently Asked Questions</h1>
          <p class="mt-4 text-lg text-gray-600">
            Here are some common questions and answers to help you out!
          </p>
        </div>
  
        <!-- FAQ List -->
        <div class="space-y-6">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white shadow-md rounded-lg p-6 transition-all duration-300"
          >
            <button
              class="w-full text-left flex items-center justify-between focus:outline-none"
              @click="toggleFAQ(index)"
            >
              <h3 class="text-lg font-medium text-gray-800">{{ faq.question }}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform transition-transform"
                :class="{ 'rotate-180': faq.open }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="faq.open"
              class="mt-4 text-gray-600 text-sm"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script setup>
  import { ref } from "vue";
  
  // Dynamic FAQ data
  const faqs = ref([
    {
      question: "What services do you provide?",
      answer:
        "We provide comprehensive appliance repair services for all major brands, including refrigerators, ovens, washers, and more.",
      open: false,
    },
    {
      question: "How can I schedule a service?",
      answer:
        "You can schedule a service through our website or by contacting us directly via phone or email.",
      open: false,
    },
    {
      question: "Do you offer same-day repair services?",
      answer:
        "Yes, we offer same-day repair services for certain appliances and issues. Please contact us for availability.",
      open: false,
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve all towns in the Bay Area, ensuring fast and reliable service wherever you are located.",
      open: false,
    },
    {
      question: "Do you use original parts for repairs?",
      answer:
        "Yes, we use genuine manufacturer parts to ensure the highest quality repairs and durability for your appliances.",
      open: false,
    },
  ]);
  
  // Toggle FAQ open/close state
  const toggleFAQ = (index) => {
    faqs.value[index].open = !faqs.value[index].open;
  };
  </script>
  
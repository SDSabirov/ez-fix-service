<template>
  <section class="py-16 bg-light-gray">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <!-- Main Header -->
      <h2 class="text-3xl md:text-4xl font-extrabold mb-8 text-bright-orange">
        Our Services
      </h2>
      <!-- Introductory Paragraph -->
      <p class="text-lg md:text-xl mb-10 text-deep-blue">
        We repair a wide range of household appliances. Whatever the issue, our
        technicians are here to help!
      </p>

      <!-- Services Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Service Item: Refrigerator Repair -->
        <div
          class="flex flex-col items-center space-y-3 bg-dark-navy rounded-xl p-6"
        >
          <div class="text-bright-orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="currentColor"
              class="bi bi-thermometer-half"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a2 2 0 0 0-2 2v7.086a3.002 3.002 0 0 0 1 5.829 3 3 0 0 0 1-5.829V3a2 2 0 0 0-2-2zM7 3a1 1 0 1 1 2 0v7.5a2 2 0 1 1-2 0V3z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-bright-orange">
            Refrigerator Repair
          </h3>
          <p class="text-white">
            Expert repairs to keep your fridge running efficiently.
          </p>
        </div>

        <!-- Service Item: Oven & Stove Repair -->
        <div
          class="flex flex-col items-center space-y-3 bg-dark-navy rounded-xl p-6"
        >
          <div class="text-bright-orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="currentColor"
              class="bi bi-oven"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.5 1a.5.5 0 0 0-.5.5V3h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-1V1.5a.5.5 0 0 0-.5-.5h-8zM5 3V2h6v1H5zm6 11H5v-1h6v1zm0-3H5v-1h6v1zm0-3H5v-1h6v1z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-bright-orange">
            Oven & Stove Repair
          </h3>
          <p class="text-white">
            Keep your oven and stove in top shape for perfect cooking.
          </p>
        </div>

        <!-- Service Item: Dishwasher Repair -->
        <div
          class="flex flex-col items-center space-y-3 bg-dark-navy rounded-xl p-6"
        >
          <div class="text-bright-orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="currentColor"
              class="bi bi-droplet"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a5.5 5.5 0 0 1 5.5 5.5c0 3.037-2.686 5.5-5.5 5.5S2.5 9.537 2.5 6.5A5.5 5.5 0 0 1 8 1zm0 11c2.482 0 4.5-2.019 4.5-4.5S10.482 3 8 3 3.5 5.019 3.5 7.5 5.518 12 8 12z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-bright-orange">Dishwasher Repair</h3>
          <p class="text-white">
            Fast and effective dishwasher repairs to keep your kitchen running
            smoothly.
          </p>
        </div>

        <!-- Service Item: Washing Machine Repair -->
        <div
          class="flex flex-col items-center space-y-3 bg-dark-navy rounded-xl p-6"
        >
          <div class="text-bright-orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="currentColor"
              class="bi bi-wind"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.5 7A2.5 2.5 0 0 0 7 4.5a.5.5 0 0 1 1 0A3.5 3.5 0 1 1 4.5 8H1.5a.5.5 0 0 1 0-1h3z"
              />
              <path
                d="M1 13a.5.5 0 0 0 0 1h5a2.5 2.5 0 0 0 0-5 .5.5 0 0 0 0 1 1.5 1.5 0 1 1 0 3H1z"
              />
              <path
                d="M13.5 9A1.5 1.5 0 0 1 12 10.5a.5.5 0 0 0 1 0A.5.5 0 1 0 13.5 9z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-bright-orange">
            Washing Machine Repair
          </h3>
          <p class="text-white">
            Ensure clean laundry with our expert washing machine repairs.
          </p>
        </div>

        <!-- Service Item: Dryer Repair -->
        <div
          class="flex flex-col items-center space-y-3 bg-dark-navy rounded-xl p-6"
        >
          <div class="text-bright-orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="currentColor"
              class="bi bi-recycle"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.62 1.78a.5.5 0 0 1 .243.67L11.22 3.62l.87.872A1.5 1.5 0 1 0 14 7H9a.5.5 0 0 1-.33-.83l2.5-2.5a.5.5 0 0 1 .67-.243l.78.4z"
              />
              <path
                d="M11.22 8.3a.5.5 0 0 1-.244-.672l.393-.836-.895-.506a1.5 1.5 0 1 0-2.67 1.002H9a.5.5 0 0 1 .33.83l-2.5 2.5a.5.5 0 0 1-.67.243l-.78-.4a1.5 1.5 0 0 0-2.67-1.003l-.38.89a.5.5 0 0 1-.672.245L1.38 11.22a.5.5 0 0 1 .245-.671l.835-.393.506.896a1.5 1.5 0 1 0 2.67-1.002H3a.5.5 0 0 1-.33-.83l2.5-2.5a.5.5 0 0 1 .67-.243l.78.4a1.5 1.5 0 0 0 2.67-1.002z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-bright-orange">Dryer Repair</h3>
          <p class="text-white">
            We’ll get your dryer back to working condition quickly.
          </p>
        </div>

        <!-- Service Item: Microwave Repair -->
        <div
          class="flex flex-col items-center space-y-3 bg-dark-navy rounded-xl p-6"
        >
          <div class="text-bright-orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="currentColor"
              class="bi bi-microwave"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 4.5a.5.5 0 0 0-.5.5V6a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5zm0 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z"
              />
              <path
                d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"
              />
              <path
                d="M6 13.5a.5.5 0 0 0 .5-.5V13h1v.5a.5.5 0 0 0 1 0V13h1v.5a.5.5 0 0 0 1 0V13h1v.5a.5.5 0 0 0 1 0V13h.5a.5.5 0 0 0 0-1H5.5a.5.5 0 0 0 0 1H6z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-bright-orange">Microwave Repair</h3>
          <p class="text-white">
            Quick repairs for all types of microwave issues.
          </p>
        </div>
      </div>
      <div class="flex w-full items-center justify-center mt-10">
        <NuxtLink
          to="/services"
          class="bg-bright-orange hover:bg-deep-blue text-white font-semibold py-3 px-6 rounded-md text-lg transition duration-300 cursor-pointer"
        >
          Explore Our Services
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup></script>

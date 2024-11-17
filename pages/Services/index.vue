<template>
  <div class="max-w-screen">
    <Navbar />
    <ServicesIntro />
    <ServicesBrands/>
    <Footer />
  </div>
</template>

<script setup>
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});
</script>

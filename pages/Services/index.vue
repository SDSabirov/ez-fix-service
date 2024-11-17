<template>
  <div>
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

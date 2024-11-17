<template>
    <div>
      <Navbar />
      <ContactBanner/>
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
  
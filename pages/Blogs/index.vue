<template>
    <div>
      <Navbar />
      <BlogsList/>
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
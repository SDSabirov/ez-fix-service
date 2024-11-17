<template>
    <div>
        <Navbar/>
        <AreasTowns/>
        <AreasZipCodes />
        <Footer />
    </div>
        
    </template>
    
    <script setup>
    onMounted(() => {
        useFlowbite(() => {
            initFlowbite();
        })
    })
    </script>
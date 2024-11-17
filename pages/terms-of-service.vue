<template>
    <div>
        <Navbar/>
    <h1>Tems of service</h1>
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
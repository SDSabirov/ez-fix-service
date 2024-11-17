<template>
    <div>
    <Navbar/>
    <FAQBody/>
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
<template>
<div>
    <Navbar/>
    <AboutIntro/>
    <AboutCertificates/>
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
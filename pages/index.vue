<template>
    <div>
        <Navbar/>
    <HomeHero />
    <HomeServiceHighlights/>
    <HomeServices />
    <HomeTestimonials />
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
<template>
    <Navbar/>
    <HomeHero />
    <HomeServiceHighlights/>
</template>

<script setup>
onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})
</script>
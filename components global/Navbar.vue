<template>
  <nav class="bg-secondary p-10 justify-between flex items-center">
    <h1 class="text-primary font-extrabold text-5xl">Netflux</h1>
    <ul class="flex gap-12 text-primary">
      <li class=" text-center" v-for="{name, path} in menu" :key="path">
        <NuxtLink class="text-2xl" :to="path">{{ name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Movies", path: "/movies" },
  ];
</script>

<style scoped>
.router-link-exact-active {
  color: white;
}
</style>

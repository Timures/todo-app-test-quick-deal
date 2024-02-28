<!-- layouts/MainLayout.vue -->
<template>
  <div class="h-screen flex flex-col">
    <header>
      <NavbarMain />
    </header>

    <main class="flex-grow">
      <slot></slot> <!-- Используйте слот для вставки контента из дочерних компонентов -->
    </main>

    <footer class="bg-gray-800 p-4 ">
      <div class="container mx-auto flex items-center justify-between">
        <p class="text-gray-100">Footer Content</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import NavbarMain from '../components/NavbarMain.vue';
</script>

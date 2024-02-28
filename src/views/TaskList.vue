<script setup>
import TaskList from '../components/TaskList.vue';
</script>

<template>
    <div>
      <h1>Task List Page</h1>
      <router-link to="/">Go to Home</router-link>

      <main>
        <TaskList />
      </main>
    </div>
  </template>
  
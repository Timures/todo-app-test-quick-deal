<template>
    <div>
      <h2>Task List</h2>
      <button @click="showTaskForm">Add Task</button>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task.name }}
          <button @click="editTask(index)">Edit</button>
          <button @click="deleteTask(index)">Delete</button>
        </li>
      </ul>
      <TaskForm v-if="showForm" :editing="editingTask !== null" :editingTask="editingTask" :editingIndex="editingIndex" @hideForm="hideTaskForm" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useTasksStore } from '@/store/modules/tasks';
  import TaskForm from '@/components/TaskForm.vue';
  
  export default {
    components: {
      TaskForm,
    },
    setup() {
      const tasksStore = useTasksStore();
  
      const showForm = ref(false);
      const editingTask = ref(null);
      const editingIndex = ref(null);
  
      const showTaskForm = () => {
        showForm.value = true;
        editingTask.value = null;
        editingIndex.value = null;
      };
  
      const hideTaskForm = () => {
        showForm.value = false;
        editingTask.value = null;
        editingIndex.value = null;
      };
  
      const editTask = (index) => {
        editingTask.value = { ...tasksStore.tasks[index] };
        editingIndex.value = index;
        showForm.value = true;
      };
  
      const deleteTask = (index) => {
        tasksStore.deleteTask(index);
      };
  
      return { tasks: tasksStore.tasks, showForm, editingTask, editingIndex, showTaskForm, hideTaskForm, editTask, deleteTask };
    },
  };
  </script>
  
<template>
    <div class="px-4 ">
      <div class="p-4 border rounded bg-gray-100 max-w-3xl mx-auto">
      <h2 class="text-lg font-semibold mb-4">{{ editing ? "Редактировать" : "Создать" }}</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Наименование:</label>
          <input type="text" id="name" v-model="task.name" required class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div class="flex space-x-4 justify-end">
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Сохранить</button>
          <button type="button" @click="cancelForm" class="border border-gray-300 px-4 py-2 rounded-md hover:border-gray-400">Отмена</button>
        </div>
      </form>
    </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useTasksStore } from '@/store/modules/tasks';
  
  export default {
    props: {
      editing: Boolean,
      editingIndex: Number,
      editingTask: Object,
    },
    setup(props, { emit }) {
      const tasksStore = useTasksStore();
  
      const task = ref({
        name: "",
      });
  
      const handleSubmit = () => {
        if (props.editing) {
          tasksStore.editTask({ index: props.editingIndex, task: { ...task.value } });
        } else {
          tasksStore.addTask({ ...task.value });
        }
  
        emit('hideForm');
      };
  
      const cancelForm = () => {
        emit('hideForm');
      };
  
      onMounted(() => {
        if (props.editingTask) {
          task.value = { ...props.editingTask };
        }
      });
  
      return { task, handleSubmit, cancelForm };
    },
  };
  </script>
  
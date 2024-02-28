<template>
  <div class="my-20">
     <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-4 text-center">Список задач</h2>
      <ul class="max-w-3xl mx-auto">
        <li v-for="(task, index) in tasks" :key="index"
          class="mb-2 p-2 border rounded flex gap-3 items-center justify-between bg-gray-100 flex-col sm:flex-row">
          <div class="flex gap-2 w-full ">
            <span class="mr-2 text-gray-500">#{{ index + 1 }}</span>
            <span class="mr-2">{{ task.name }}</span>
          </div>
          <div class="flex gap-2 ml-auto">
            <button @click="editTask(index)" class="bg-yellow-500 text-white py-1 px-2 rounded">Изменить</button>
            <button @click="deleteTask(index)" class="bg-red-500 text-white py-1 px-2 rounded">Удалить</button>
          </div>
        </li>
      </ul>

     <div class="flex justify-center my-4">
      <button @click="showTaskForm" class="bg-blue-500 text-white py-2 px-4 mb-4 rounded">Создать задачу</button>
     </div>
    </div>
    <TaskForm v-if="showForm" :editing="editingTask !== null" :editingTask="editingTask" :editingIndex="editingIndex"
      @hideForm="hideTaskForm" />
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
  
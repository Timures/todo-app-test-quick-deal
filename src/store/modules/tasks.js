import { defineStore } from 'pinia';

export const useTasksStore = defineStore({
  id: 'tasks',
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  }),
  actions: {
    addTask(task) {
      this.tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    editTask({ index, task }) {
      this.tasks.splice(index, 1, task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
  },
});

export function setupTasksStore() {
  return useTasksStore();
}

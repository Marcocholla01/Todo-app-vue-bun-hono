<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold text-center mb-6 text-gray-50">Todo List</h1>
    <form @submit.prevent="addTodo" class="mb-6 flex justify-center">
      <input v-model="newTodo" class="input input-bordered w-1/2 lg:w-1/3 p-4 rounded-l-lg shadow-md"
        placeholder="Add a new task" />
      <button class="ml-2 btn btn-primary p-4 rounded-r-lg shadow-md">Add</button>
    </form>
    <ul class="space-y-4">
      <li v-for="todo in todos" :key="todo.id"
        class="flex justify-between items-center bg-white shadow-md p-4 rounded-lg transition-transform transform hover:scale-105">
        <span :class="{ 'line-through text-gray-400': todo.completed, 'text-gray-800': !todo.completed }">
          {{ todo.title }}
        </span>
        <div class="space-x-2">
          <button @click="markAsComplete(todo.id)" class="btn btn-secondary btn-sm" :disabled="todo.completed">
            <span v-if="todo.completed">Completed</span>
            <span v-else>Mark as Complete</span>
          </button>


          <button @click="deleteTodo(todo.id)" class="btn btn-error btn-sm">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const todos = ref([]);
    const newTodo = ref('');

    const fetchTodos = async () => {
      const response = await fetch(`http://localhost:4000/todos`);
      todos.value = await response.json();
    };

    const addTodo = async () => {
      if (newTodo.value.trim() === '') return;
      const response = await fetch(`http://localhost:4000/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTodo.value }),
      });
      const todo = await response.json();
      todos.value.push(todo);
      newTodo.value = '';
    };

    const markAsComplete = async (id) => {
      const todo = todos.value.find(t => t.id === id);
      const response = await fetch(`http://localhost:4000/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: true, title: todo.title }), // Mark as complete
      });
      const updatedTodo = await response.json();
      const index = todos.value.findIndex(t => t.id === id);
      todos.value[index] = updatedTodo;
    };

    const deleteTodo = async (id) => {
      await fetch(`http://localhost:4000/todos/${id}`, {
        method: 'DELETE',
      });
      todos.value = todos.value.filter(t => t.id !== id);
    };

    onMounted(fetchTodos);

    return { todos, newTodo, addTodo, markAsComplete, deleteTodo };
  },
};
</script>


<style scoped>
.line-through {
  text-decoration: line-through;
}

.btn-secondary:disabled {
  background-color: #d6d6d6;
  /* Change this to your desired color */
  color: #a1a1a1;
  /* Change text color if needed */
  cursor: not-allowed;
  /* Optional: Change the cursor */
}
</style>

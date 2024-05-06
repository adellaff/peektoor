<template>
    <div class="bg-gray-100 p-4 rounded-lg shadow-md min-h-full min-w-full">
      <div class="">
        <span class="text-lg font-bold">NEW POST</span>
        <div class="mt-8">
          <form action="#">
            <label class="text-sm block mb-2">Title:</label>
            <input type="text" class="block mb-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-black">
            <label for="category" class="text-sm block mb-2">Category:</label>
            <select id="category" v-model="selectedCategory" class="block mb-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-black">
              <option value="" disabled selected>Select a category</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>
            <textarea name="" id="" cols="30" rows="10" class="w-full mt-2"></textarea>
            
            <button class="m-3 absolute bottom-4 right-4 flex items-center bg-black text-white py-2 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-400 h-8 inline-block">POST</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        selectedCategory: null,
        categories: [
          {
            id: 1,
            name: 'Photography',
          },
          {
            id: 2,
            name: 'Traveling',
          },
        ]
      };
    }
  };
  </script>
  
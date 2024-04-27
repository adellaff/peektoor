<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="main bg-black rounded-lg shadow-md p-10 transition-transform w-96 text-center">
        <h1 class="text-white text-3xl font-comic-sans">
              PEEKToor</h1><label class="text-gray-300"> Login</label>
        <h3 class="text-lg">
          </h3>
        <form action="">
            <label for="first" class="block mb-2 text-left text-white font-bold">Email:</label>
            <input type="text" id="first" name="first" placeholder="Enter your email" class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                 focus:border-green-400" required>
 
            <label for="password" class="block mb-2 text-left
             text-gray-700 font-bold">Password:</label>
            <input type="password" id="password" name="password"
                   placeholder="Enter your Password"
                   class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400" required>
 
            <div class="flex justify-center items-center">
                <button type="submit" class="bg-white text-black py-2 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-400">
                    Login
                </button>
                
            </div>
            <label class="text-gray-300 text-center">Or</label>
            <div class="flex justify-center items-center">
                <button type="submit" class="bg-white text-black py-2 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-400">
                    Login with Google
                </button>
            </div>
        </form>
        <p class="mt-4">Not registered?
            <!-- <a href="#" class="text-blue-500 hover:underline">Create an account</a> -->
        </p>
    </div>
</template>

<style scoped>

</style>

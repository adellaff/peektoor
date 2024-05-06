<template>
    <div class="flex h-screen items-center justify-center">
        <div class="main bg-black rounded-lg shadow-md p-10 transition-transform w-96 text-center">
            <h1 class="font-noto text-white text-3xl font-comic-sans">
                PEEKToor</h1><label class="text-gray-300 mb-2"> Login</label>
            <!-- <h3 class="text-lg">
            </h3> -->
            <form action="#">
                <label for="first" class="block mb-1 mt-3 text-left text-white font-bold text-xs">Email:</label>
                <input type="text" id="first" name="first" placeholder="Enter your email" class="block w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                 focus:border-green-400" required>

                <label for="password" class="block mb-1 text-left
             text-white font-bold text-xs">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your Password"
                    class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                    required>

                <div class="flex justify-center items-center">
                    <button type="submit"
                        class="flex items-center bg-white text-black py-2 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-400 w-24 h-8">
                        <!-- <i class="bi bi-google text-black-500"></i>  -->
                        Login
                    </button>
                </div>
                <label class="text-gray-300 text-center text-xs ">Or</label>
                <div class="flex justify-center items-center">
                    <button type="submit"
                        class="flex items-center bg-white text-black py-2 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-400 h-8">
                        <i class="bi bi-google text-black-500"></i>&nbsp;     
                        Login With Google
                        <!-- <IconGoogle :iswhite="true"/> -->
                    </button>
                </div>
            </form>
            <p class="mt-4">
                <label class="text-gray-300 text-center text-xs">Don't have an account yet?</label> 
                <a href="#" class="text-white text-xs italic bold">Register Here!</a><br>
            </p>
        </div>
    </div>
</template>
<template>
    <div class="h-96 bg-gray-100 p-4 rounded-lg shadow-md min-h-full min-w-full flex flex-col">
        <div class="p-5 bg-white p-4 rounded-lg shadow-md min-h-full min-w-full">
            <span class="text-lg font-bold">SETTING</span>
            
            <form action="#" class="">
            <div class="flex justify-center">
                    <img :src="user.avatar" class="h-40 w-40 rounded-full object-fill" alt="">
            </div>
            <div class="flex-1 relative flex flex-col justify-end">
                <span class="">Name</span>
                <input type="text" class="mb-3 border-b-2 border-gray-300 focus:outline-none " :value="user.name">
                <span class="">Username</span>
                <input type="text" class="mb-3 border-b-2 border-gray-300 focus:outline-none" :value="user.username">
                <span>Email</span>
                <input type="text" class="mb-3 border-b-2 border-gray-300 focus:outline-none" :value="user.email">
                <span>Password</span>
                <input type="password" class="mb-3 border-b-2 border-gray-300 focus:outline-none" :value="user.password">

                <button class="mt-auto flex items-center bg-black text-white py-2 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-400 h-8 inline-block w-24">POST</button>
                
            </div>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "Adera Cuy",
                username: "mylittlesparklingwater",
                avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                email: "kucinggagrong@gmail.com",
                password: "qwertyu"                
            }
        }
    }
}
</script>

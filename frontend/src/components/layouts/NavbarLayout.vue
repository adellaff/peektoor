<template>
    <nav  class="flex bg-black">
        <div class="min-w-full bg-black text-white p-3 fixed flex justify-between items-center">
            <div>
                <a href="/home" class="p5 font-inter text-white text-3xl">PEEKtoor</a>
            </div>
            <div class="flex items-center">
                <template v-for="(item, index) in menus" :key="index">
                    <div @click="onMove(item.to)" class="menu-item cursor-pointer mr-5">
                        {{ item.title }}
                    </div>
                </template>
                <div v-if="(user.auth === true)" class="ml-5">
                    <button type="button" class="mr-5 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span class="absolute -inset-1.5"></span>
                        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                      </button>
                      
                </div>
                <div v-else>
                    <strong><a href="#">LOGIN</a></strong>

                </div>
            </div>
        </div>
    </nav>
    <div class="p-5 mt-12 w-full">
            <RouterView />
    </div>
</template>

<script>
export default {
    data() {
        
        return {
            user: {
                auth: true,
                avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
            },
            menus: [
            {
                id: 1,
                title: "Home",
                to: "/home",
            },
            {
                id: 2,
                title: "New",
                to: "/new",
            },
            {
                id: 3,
                title: "Trending",
                to: "/trending",
            },
            ]
        }
    },
    methods: {
        onMove(to) {

            this.$router.push(to);
        }
    }
}
</script>
<template>
    <div class="w-screen bg-black text-white p-3 fixed flex justify-between items-center z-50">
        <div>
            <a href="/dashboard" class="p5 font-inter text-white text-3xl">PEEKtoor</a>
        </div>
        <div>
            <a href="/home" class="text-white">Go to website</a>
        </div>
    </div>
    <div class="flex">
        <div class="h-screen flex flex-col bg-black text-white min-w-60">
            <div class="p-5 flex-grow mt-16">
                <!-- <router-link :to="item.to" v-for="(item, index) in menus" :key="index" class="menu-item cursor-pointer">
                    <i :class="item.icon" class="me-3"></i>
                    {{ item.title }}
                </router-link>  -->
                <template v-for="(item, index) in menus" :key="index">
                    <div v-if="(user.role_id == 2 && !item.isadmin) || (user.role_id == 1)" @click="onMove(item.to)"
                        class="menu-item cursor-pointer mb-6">
                        <i :class="item.icon" class="me-3"></i>
                        {{ item.title }}
                    </div>
                </template>
            </div>
            <div class="p-3 flex items-end py-4">
                <img :src="user.avatar" class="h-12 w-12 rounded-full">
                <div class="flex flex-col ml-2"> <!-- Container for user.name and label -->
                    <h4 class="">{{ user.name }}</h4>
                    <label class="block text-gray-500 "> <!-- Use block to make it appear on a new line, text-gray-500 for grey color -->
                        <span v-if="user.membership_type === 1">Premium Member</span>
                        <span v-else>Regular Member</span>
                    </label>
                </div>
            </div>

        </div>
        <div class="p-5 mt-16 w-full relative">
            <RouterView />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: "ADERA",
                role_id: 1,
                membership_type: 1,
                avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            menus: [
                {
                    id: 1,
                    title: "DASHBOARD",
                    icon: "bi bi-speedometer2",
                    to: "/dashboard",
                },
                {
                    id: 2,
                    title: "POST",
                    icon: "bi bi-file-earmark-post-fill",
                    to: "/post",
                },
                {
                    id: 2,
                    title: "NOFICATIONS",
                    icon: "bi bi-bell",
                    to: "/notification"
                },
                {
                    id: 3,
                    title: "SETTING",
                    icon: "bi bi-gear",
                    to: "/setting",
                    
                },
                {
                    id: 4,
                    title: "CATEGORY",
                    icon: "bi bi-tags-fill",
                    to: "/category",
                    isadmin: true
                },
                {
                    id: 5,
                    title: "USERS",
                    icon: "bi bi-people",
                    to: "/users",
                    isadmin: true
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

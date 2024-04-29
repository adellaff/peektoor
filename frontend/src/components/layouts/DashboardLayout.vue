<template>
    <div class="w-screen bg-black text-white p-3">
        <div>Peektor</div>
    </div>
    <div class="flex">
        <div class="h-screen bg-black text-white min-w-60">
            <div class="p-5 flex flex-col">
                <!-- <router-link :to="item.to" v-for="(item, index) in menus" :key="index" class="menu-item cursor-pointer">
                    <i :class="item.icon" class="me-3"></i>
                    {{ item.title }}
                </router-link>  -->
                <template v-for="(item, index) in menus" :key="index">
                    <div v-if="(user.role_id == 2 && !item.isadmin) || (user.role_id == 1)" @click="onMove(item.to)"
                        class="menu-item cursor-pointer">
                        <i :class="item.icon" class="me-3"></i>
                        {{ item.title }}
                    </div>
                </template>
            </div>
        </div>
        <div class="p-5">
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
                role_id: 1
            },
            menus: [
                {
                    id: 1,
                    title: "NEW POST",
                    icon: "bi bi-file-post-fill",
                    to: "/dashboard",
                },
                {
                    id: 2,
                    title: "NOFICATION",
                    icon: "bi bi-postcard",
                    to: "/new-post"
                },
                {
                    id: 3,
                    title: "SETTING",
                    icon: "bi bi-house",
                    to: "/dashboard",
                    isadmin: true
                },
                {
                    id: 4,
                    title: "CATEGORY",
                    icon: "bi bi-pencil",
                    to: "/dashboard"
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

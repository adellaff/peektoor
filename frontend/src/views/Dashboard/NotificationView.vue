<template>
  <div class="h-96 flex flex-col bg-gray-100 p-4 rounded-lg shadow-md min-h-full min-w-full">
    <header class="bg-black text-white py-4 px-6">NOTIFICATIONS</header>
    <div class="flex-1 overflow-y-auto bg-gray-100 p-4 shadow-md">
      <div class="grid grid-cols-1 gap-y-3">
        <template v-for="(item, index) in notifications" :key="index">
          <div class="flex items-center grid grid-cols-3 gap-4  h-20 border-b">
            <div class="flex items-center col-span-2">
              <img :src="item.avatar" class="h-12 w-12 rounded-full" alt="Avatar">
              <span class="ml-2">{{ item.activity }}</span>
            </div>
            <div class="">
              <span class="grid justify-items-end text-gray-400 inset-y-0 right-0 ">{{ formatDate(item.created_at) }}</span>

            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        {
          activity: "Soodam has sent a comment on your post.",
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          article_id: 1,
          created_at: '2024-04-21 14:28:36'
        },
        

      ]
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }
  }
};
</script>

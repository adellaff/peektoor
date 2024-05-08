<template>
    <!-- content -->
    
    <div class="flex flex-col justify-center mx-auto w-4/5 ">
        <div class="mx-3 grid grid-rows-3 grid-flow-col">
                <div class="p-2 row-span-3 ">
                    <img :src="article.image" class="w-28 h-28 object-cover object-center" :alt="article.title">
                </div>
                
                <div class="mt-2 row-span-2 flex flex-col justify-center">
                    <strong>{{article.title}}</strong>
                    <p class="mt-3">{{article.excerpt}} <a href="#" class="hover:text-blue-600">Read more</a></p>
                </div>
                <div class="flex flex-row-reverse h-auto">
                  <div class="mr-2"><a href="#"><i class="bi bi-heart"></i> Likes</a></div>
                  <div class="mr-2"><a href="#"><i class="bi bi-chat-dots"></i> Comments</a></div>
                </div>
                </div>
            <div class="border-b-2 mx-5"></div>
            
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    title: "Comeback to the heaven On Earth",
                    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    date: "May 6, 2024",
                    author: "May June Hoho",
                    created_at: "Saturday, 29 May 2024"
                }
            }
        }
    }
</script>
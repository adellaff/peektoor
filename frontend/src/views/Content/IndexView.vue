<template>
    <div class="ml-10 grid grid-cols-3 gap-4 max-w-screen">
        <div class="col-span-2 border-x-2">
            <div class="mx-5 border-b-2">
                <img :src="article.image" class="w-full h-50 object-cover object-center" alt="Article Image">
                hello
            </div>
            <div>
                
            </div>
        </div>
        <div class="grid grid-rows-2 gap-4">
            
            <div class="bg-white shadow-lg h-96 ">
                <header class="border-b-2 p-3">TODAY's TREND</header>
            </div>
            <div>
                2nd row
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      article: {
        title: "Article Title",
        image: "https://via.placeholder.com/400x200",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "May 6, 2024"
      }
    };
  },
};
</script>
<template>
    <div  class="mx-3 grid grid-rows-3 grid-flow-col cursor-pointer transition ease-in duration-100 hover:transform hover:scale-150">
        <div class="p-2 row-span-3 ">
            <img :src="article?.image" class="w-28 h-28 object-cover object-center" :alt="article?.title">
        </div>

        <div class="mt-2 row-span-2 flex flex-col justify-center">
            <strong @click="$emit('onselect',article)">{{ article?.title }}</strong>
            <p class="mt-3">{{ article?.excerpt }} <a href="#" class="hover:text-blue-600">Read more</a></p>
        </div>
        <div class="flex flex-row-reverse h-auto">
            <div class="mr-2"><a href="#"><i class="bi bi-heart"></i> Likes</a></div>
            <div class="mr-2"><a href="#"><i class="bi bi-chat-dots"></i> Comments</a></div>
        </div>
    </div>
    <hr />
</template>
<script>
export default{
    props:{
        article:{
            default:{}
        },
        dwi:{

        }
    },
    methods:{
        onselect(val){
            alert(val);
            this.$emit('onselect')
        }
    }
}
</script>
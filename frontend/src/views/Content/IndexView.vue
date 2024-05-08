<template>

  <div class="ml-10 grid grid-cols-3 gap-4 max-w-screen">

    <!-- hero -->
    <div class="col-span-2 ">
      <div class="mx-5">
        <img :src="article.image" class="w-full h-96 object-cover object-center" :alt="article.title">
        <div class="my-3">
          <strong class="text-3xl">{{ article.title }}</strong>
        </div>
        <div class="mb-3">
          {{ article.excerpt }} <h href="#">Read More</h>
        </div>
        <hr />
      </div>

      <!-- content -->
      <template v-for="(item, index) in articles" :key="index">
        <ListArticles :article="item" :dwi="1" @onselect="onselectparent" />
      </template>


      <!-- content -->
    </div>

    <!-- TRENDING -->
    <div class="grid grid-rows-2 gap-4 max-w-96">

      <div class="bg-white shadow-lg h-auto px-3 ">
        <div class="border">
          <h1>{{ selected.title }}</h1>
        </div>

        <header class="border-b-2 p-3">HOT TREND</header>
        <template v-for="(item, index) in trending" :key="index">
          <a href="#" class="mb-5 italic">
            <strong class="text-2xl"># </strong>
            <strong class="text-2xl">{{ item.title }}</strong>&nbsp;
            <label class="text-sm">{{ item.author }}</label><br>
          </a>

        </template>
      </div>

      <!-- TOP CREATORS  -->
      <div class="bg-white shadow-lg h-auto px-3">
        <header class="border-b-2 p-3">TOP CREATORS</header>
        <a href="/profile">
          <template v-for="(item, index) in creators" :key="index">
            <div class="p-3 flex items-end py-4">
              <img :src="item.avatar" class="h-12 w-12 rounded-full">
              <div class="flex flex-col ml-2">
                <h4 class="">{{ item.name }}</h4>
                <label class="block text-gray-500 ">
                  <span>{{ item.followers }}M Followers</span>
                </label>
              </div>
            </div>
          </template></a>
      </div>
    </div>
  </div>
</template>

<script>
import ListArticles from '@/components/widgets/ListArticles.vue';


export default {
  components: { ListArticles },
  data() {
    return {
      selected: {},
      articles: [
        {
          title: "Lorem Ipsum Dolow Sit Amet, Amazing!",
          image: "https://images.unsplash.com/photo-1715010744925-37a5b83e0d75?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date: "May 6, 2024",
          author: "May June Hoho",
          created_at: "Saturday, 29 May 2024"
        }
      ],
      trending: [
        {
          title: "Hello lorem ipsum yuhu yidi yada",
          author: "Megan Trainor"
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          author: "Megan Trainor"
        },
        {
          title: "Hadiah gratis liburan di Bali, Kuy!",
          author: "Megan Trainor"
        },

      ],
      creators: [
        {
          avatar: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Mamat Rahmat Uhuy",
          followers: "12.4"
        },
        {
          avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Elizabeth Arasseo",
          followers: "12"
        },
        {
          avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Gomawoyo Saranghaeyo",
          followers: "10"
        },
        {
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Cicih Yeppeuda",
          followers: "9"
        },
      ]
    };
  },
  computed: {
    article() {
      return this.articles[0];
    }
  },
  mounted() {
    for (var i = 0; i < 1000; i++) {
      this.articles.push({
        title: "Lorem Ipsum Dolow Sit Amet, Amazing!"+i,
        image: "https://images.unsplash.com/photo-1715010744925-37a5b83e0d75?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "May 6, 2024",
        author: "May June Hoho",
        created_at: "Saturday, 29 May 2024"
      })
    }
  },
  methods: {
    onselectparent(item) {
      alert("dari parent");
      this.selected=item
    }
  }
};
</script>
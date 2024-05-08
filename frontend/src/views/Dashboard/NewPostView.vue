<template>
  <div v-html="form.content">
  </div>
  <div class="bg-gray-100 p-4 rounded-lg shadow-md min-h-full min-w-full">
    <div class="">
      <span class="text-lg font-bold">NEW POST</span>
      <div class="mt-8">
        <form action="#">
          <label class="text-sm block mb-2">Title:</label>
          <input type="text" v-model="form.title"
            class="p-2 block mb-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-black">
          <label for="category" class="text-sm block mb-2">Category:</label>
          <select id="category" v-model="form.category_id"
            class="p-2 block mb-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-black">
            <option value="" disabled selected>Select a category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
          <textarea name="" id="editor1" cols="30" rows="10" class="w-full mt-2"></textarea>
   
        </form>
      </div>
    </div>

  </div>

  <div class="w-full flex justify-end bg-red-500  p-2  absolute bottom-4">
    <button @click="submit"
      class="m-3  flex items-center bg-black text-white py-2 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-400 h-8 inline-block">POST</button>
  </div>
  <Editor v-model="form.content" editorStyle="height: 320px" />
</template>

<script>
import Editor from 'primevue/editor';
export default {
  components:{Editor},
  data() {
    return {
      form: {
        title: "",
        category_id: "",
      },
      show: true,
      selectedCategory: null,
      categories: [
        {
          id: 1,
          name: 'Photography',
        },
        {
          id: 2,
          name: 'Traveling',
        },
      ]
    };
  },
  beforeMount() {
    // var scriptTag = document.createElement("script");
    // scriptTag.src = "https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js";
    // document.getElementsByTagName('head')[0].appendChild(scriptTag);
  },
  mounted() {
    $('#editor1').summernote({
      placeholder: 'Hello stand alone ui',
      tabsize: 2,
      height: 120,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen', 'codeview', 'help']]
      ]
    });
  },
  methods: {
    submit() {
      const content = $('#editor1').summernote('code');

      this.form.content = content
      console.log("this.form", this.form, content)
    },
    // summernoteChange(newValue) {
    //   console.log("summernoteChange", newValue);
    // },
    // summernoteImageLinkInsert(...args) {
    //   console.log("summernoteImageLinkInsert()", args);
    // },
  }
};
</script>
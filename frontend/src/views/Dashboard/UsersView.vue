<template>
    <div class="h-96 bg-gray-100 p-4 rounded-lg shadow-md min-h-full min-w-full flex flex-col">
      <div class="p-5 bg-white p-4 rounded-lg shadow-md min-h-full min-w-full">
        <span class="text-lg font-bold">USERS</span>
        <div class="m-3">
          <a href="#" class="inline-block bg-black text-white py-2 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-400">
            <i class="bi bi-file-earmark-plus"></i> Add New User
          </a>
        </div>
        <div class="m-3 ">
          <table class="flex flex-col overflow-y-scroll min-w-full text-left min-w-full">
            <thead class="bg-black text-white">
              <tr class="">
                <th class="px-4 py-2 w-px">No</th>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Username</th>
                <th class="px-4 py-2">Email</th>
                <th class="px-4 py-2">Password</th>
                <th class="px-4 py-2">Membership Type</th>
                <th class="px-4 py-2 w-px">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-grey-light w-full" style="height: 50vh;">
              <template v-for="(item, index) in user" :key="index">
                <tr class="w-full mb-4">
                  <td>{{ index + 1 }}</td> 
                  <td>{{ item.name }}</td> 
                  <td>{{ item.username }}</td> 
                  <td>{{ item.email }}</td> 
                  <td>{{ item.password }}</td> 
                  <td>{{ item.membership_type }}</td> 
                  <td class="m-5">
                    <a href="#"> <i class="bi bi-pencil-square mr-5" @click="openEditModal(index)"></i></a>
                    <a href="#"> <i class="bi bi-trash-fill mr-5" @click="openDeleteModal(index)"></i></a>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    
      <!-- Modal EDIT -->
      <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50" v-show="isModalOpen" @click="closeModal">
        <!-- Modal content -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <!-- Modal header -->
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-semibold">Edit User</h2>
            <button @click="closeModal">
              <i class="bi bi-x-circle text-gray-500 hover:text-gray-700 text-xl"></i>
            </button>
          </div>
          <!-- Modal body -->
          <div class="mt-4 w-80">
            <!-- Modal content goes here -->
            <input type="text" v-model="editedUser.name" class="mb-3 border border-gray-300 rounded-md p-2 w-full" placeholder="Name">
            <input type="text" v-model="editedUser.username" class="mb-3 border border-gray-300 rounded-md p-2 w-full" placeholder="Username">
            <input type="email" v-model="editedUser.email" class="mb-3 border border-gray-300 rounded-md p-2 w-full" placeholder="Email">
            <input type="password" v-model="editedUser.password" class="mb-3 border border-gray-300 rounded-md p-2 w-full" placeholder="Password">
            
            <button @click="saveEdit" class="mt-4 bg-black text-white px-4 py-2 rounded-md">Save Changes</button>
          </div>
        </div>
      </div>

      <!-- Modal Delete -->
      <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50" v-show="isModalDeleteOpen" @click="closeDeleteModal">
        <!-- Modal content -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <!-- Modal header -->
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-semibold">Delete User</h2>
            <button @click="closeDeleteModal">
              <i class="bi bi-x-circle text-gray-500 hover:text-gray-700 text-xl"></i>
            </button>
          </div>
          <!-- Modal body -->
          <div class="mt-4">
            <!-- Modal content goes here -->
            <h6>Are you sure you want to delete selected user?</h6>
            <div class="flex justify-end">
                <button @click="deleteUser" class="mt-4 mr-5 bg-red-500 text-white px-4 py-2 rounded-md">Yes</button>
                <button @click="closeDeleteModal" class="mt-4 bg-black text-white px-4 py-2 rounded-md">No</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: [
          {
            id: 1,
            name: "MAMAT ASBUN",
            username: "matmatmatttt",
            email: "mamat123",
            password: "12324766",
            membership_type: "Premium",
          },
        ],
        editedUser: { 
          id: null, 
          name: "", 
          username: "", 
          email: "", 
          password: "", 
        },
        isModalOpen: false,
        isModalDeleteOpen: false
      };
    },
    methods: {
      openEditModal(index) {
        this.editedUser = { ...this.user[index] };
        this.isModalOpen = true;
      },
      saveEdit() {
        
        this.closeModal();
      },
      closeModal() {
        this.isModalOpen = false;
        this.editedUser = { 
          id: null, 
          name: "", 
          username: "", 
          email: "", 
          password: "", 
        };
      },
      openDeleteModal(index){
        this.deleteIndex = index;
        this.isModalDeleteOpen = true;
      },
      closeDeleteModal() {
      this.isModalDeleteOpen = false;
      this.deleteIndex = null; 
    },
      deleteUser() {
      if (this.deleteIndex !== null) {
        this.user.splice(this.deleteIndex, 1);
        this.closeDeleteModal();
      }
      },
    },
  };
  </script>
  
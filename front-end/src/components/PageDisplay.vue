<template>
  <div class="PageDisplay">
    <div v-for='(gettersUser, index) in getUsers' :key='index'>
      <b>{{gettersUser.email}}</b><br/>
      {{gettersUser.password}}<br/>
      <button @click="removeUser(gettersUser.id)">Delete</button><br/><br/>
    </div>
    <div>
      <button @click="addRandomUser">New random email</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useUserStore } from "../stores/users";
const store = useUserStore();


function addRandomUser() {
  const email = Math.random().toString(16).substr(2,8) + "@" + Math.random().toString(16).substr(2,8) + ".com"
  const password = Math.random().toString(16).substr(2,10)
  console.log(email + " " + password)
  let response = store.addUser(email, password)
  store.fetchUsers();
  return response
}

function removeUser(id) {
  return store.deleteUser(id)
}

const getUsers = computed(() => {
  return store.getUsers
})

onMounted(() => {
  store.fetchUsers();
})

</script>
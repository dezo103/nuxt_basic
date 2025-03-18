<template>
  <div>
    <table class="table">
      <thead>
        <tr class="border-b">
          <th>Name</th>
          <th>City</th>
          <th>Nat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id.value" class="text-gray-500">
          <th>{{ user.name.first }} {{ user.name.last }}</th>
          <th>{{ user.location.city }}</th>
          <th>{{ user.nat }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $axios }) {
    const users = await $axios.$get("https://randomuser.me/api/?results=10");
    return {
      users: users.results,
    };
  },
};
</script>

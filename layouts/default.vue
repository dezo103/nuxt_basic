<template>
  <div>
    <nav class="flex justify-center">
      <div class="border rounded-xl p-2 m-4">
        <!--        это Vue router-->
        <nuxt-link to="about">About</nuxt-link>
      </div>
      <div class="border rounded-xl p-2 m-4">
        <nuxt-link to="contacts">Contacts</nuxt-link>
      </div>
      <div class="border rounded-xl p-2 m-4">
        <nuxt-link to="/">Main</nuxt-link>
      </div>
    </nav>
    <nuxt class="flex justify-center" />
  </div>
</template>
<script></script>

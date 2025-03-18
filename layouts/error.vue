<template>
  <div>
    <div id="error">
      <div class="flex justify-center border-2 p-2 m-2">
        {{ error.statusCode }}
      </div>
      <div class="flex justify-center border p-2 m-2">{{ error.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error-layout",
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <p>users/определенный id</p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    const idCheck = /^d+$/.test(params.id);
    if (!idCheck) {
      throw new Error("incorrect id");
    }
    return true;
  },
};
</script>

<style lang="scss" scoped></style>

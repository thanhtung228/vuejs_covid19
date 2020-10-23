<template>
  <div>
    <h3>
      {{ message }}
    </h3>
    <router-link to="/">Back to home</router-link>
  </div>
</template>

<script>
export default {
  name: "Page404",
  computed: {
    message() {
      return "Page not found";
    },
  },
};
</script>

<style lang="scss" scoped></style>

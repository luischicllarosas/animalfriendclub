<template>
  <div></div>
</template>
<script>
export default {
  created() {
    this.$axios("/dashboard")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

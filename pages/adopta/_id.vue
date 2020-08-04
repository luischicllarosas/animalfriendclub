<template>
  <div>
    
  </div>
</template>

<script>
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      key: "value",
    }
  },
}
</script>

<style lang="scss" scoped></style>

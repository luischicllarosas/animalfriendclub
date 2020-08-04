<template>
  <v-app>
    <Navbar />
    <v-container>
      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
// import Sidebar from "~/components/sidebar";
import Navbar from "~/components/navbar"
export default {
  components: {
    // Sidebar,
    Navbar,
  },
}
</script>
<style lang="scss"></style>

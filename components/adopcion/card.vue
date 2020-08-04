<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="post.img" height="200px"></v-img>

    <div class="card-title">
      {{ post.title }}
    </div>
    <!-- <v-card-subtitle>1,000 miles of wonder</v-card-subtitle> -->
    <v-card-actions>
      <!-- <v-btn text color="purple">Ver mas</v-btn> -->

      <!-- <v-btn color="purple" text>Explore</v-btn> -->

      <v-btn icon link @click="openpost(post)">
        <v-icon>mdi-eye-outline</v-icon>
      </v-btn>
      <!-- <v-btn icon :color="like ? 'pink' : 'grey'">
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ post.content }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["post", "openpost"],
  data: () => ({
    show: false,
  }),
}
</script>
<style lang="scss">
.h-50px {
  height: 50px;
}
</style>

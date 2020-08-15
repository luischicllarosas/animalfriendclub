<template>
  <v-overlay :value="overlay">
    <v-btn icon @click="overlayAction">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-card max-width="640">
      <v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(img, i) in overlayItem.img" :key="i">
          <!-- <v-sheet :color="colors[i]" height="100%"> -->
          <v-row class="fill-height" align="center" justify="center">
            <v-img class="mx-auto" :src="img.url" width="640" max-width="780" max-height="480"></v-img>
          </v-row>
          <!-- </v-sheet> -->
        </v-carousel-item>
      </v-carousel>

      <v-card-title>{{ overlayItem.title }}</v-card-title>
      <v-card-text>
        Hola
      </v-card-text>
      
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  props: ["overlay", "overlayAction", "overlayItem"],
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped></style>

<template>
  <div>
    <v-container class="grey lighten-5">
      <v-lazy>
        <v-row>
          <v-col v-for="item in post" :key="item.id" sm="6" lg="4" xl="3">
            <Card :post="item" :openpost="openpost" />

            <v-overlay :value="overlay">
              <v-btn icon @click="overlay = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-card>
                <v-img :src="overlayItems.img" height="200px" max-width="720"></v-img>
              </v-card>
            </v-overlay>
          </v-col>
        </v-row>
      </v-lazy>
    </v-container>
  </div>
</template>

<script>
import Card from "@/components/adopcion/card"
export default {
  components: {
    Card,
  },
  data() {
    return {
      overlay: true,
      overlayItems: [],
      post: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing ",
          img: "/photos/4_4.jpg",
          content:
            "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
          like: true,
        },
        {
          id: 2,
          title: "Lorem ipsum dolor",
          img: "/photos/16_9.jpg",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro veritatis nostrum quaerat distinctio unde quae, est harum quia, laborum labore illum vitae quibusdam eaque deserunt totam ipsam non placeat possimus.",
        },
        {
          id: 3,
          title: "Titulo 3",
          img: "/photos/21_9.jpg",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro veritatis nostrum quaerat distinctio unde quae, est harum quia, laborum labore illum vitae quibusdam eaque deserunt totam ipsam non placeat possimus.",
        },
        {
          id: 4,
          title: "Titulo 4",
          img: "/photos/400_400.jpg",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 5,
          title: "Titulo 5",
          img: "/photos/4_4.jpg",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 6,
          title: "Titulo 6",
          img: "/photos/4_4.jpg",
          content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
        veritatis nostrum quaerat distinctio unde quae, est harum quia, laborum
        labore illum vitae quibusdam eaque deserunt totam ipsam non placeat
        possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam, aliquid, quae quam nam quidem recusandae corrupti accusantium eveniet modi veritatis officia possimus voluptas in repellendus iusto vel similique laborum!`,
        },
      ],
    }
  },
  methods: {
    openpost(item) {
      console.log(item)
      this.overlayItems = item;
      this.overlay = true
    },
  },
  async created() {
    console.log("Created")
    // let res = await this.$axios('https://jsonplaceholder.typicode.com/photos')
    // let newData = res.data;
    // newData.lenght = 10;
    // console.log(newData[]);
    // this.post = res.data;
  },
}
</script>

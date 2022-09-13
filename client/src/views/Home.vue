<template>
  <div>
    <v-container>
      <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
        {{ this.$route.params.message }}
      </v-alert>
      <v-row>
        <v-col sm="4" xl="3" v-for="item in posts" :key="item._id">
          <v-card class="mx-auto" :to="{ name: 'Post', params: { id: item._id } }">
            <v-img :src="`${item.image}`" height="350"></v-img>

            <v-card-title>
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle class="text-uppercase">
              {{ item.category}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              {{ item.content.substring(0, 50) + "..." }}
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange lighten-1" dark :to="{ name: 'EditPost', params: { id: item._id } }">
                Edit
              </v-btn>
              <v-btn color="red lighten-1" dark @click="removePost(item._id)">
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import API from '../api';

  export default {
    name: 'Home',

    data() {
      return {
        posts: [],
      }
    },

    async created() {
      this.posts = await API.getAllPost();
      console.log(this.posts)
    },

    methods: {
      async removePost(id) {
        const response = await API.deletePost(id)
        this.$router.push({name: 'Home', params: { message: response.message }})
      }
    }
  }
</script>
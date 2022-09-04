<template>
  <div>
    <v-container>
      <v-row>
        <v-col sm="4" xl="3" v-for="item in posts" :key="item._id">
          <v-card class="mx-auto" max-width="344" :to="{ name: 'Post', params: { id: item._id } }">
            <v-img :src="`${item.image}`" height="350"></v-img>

            <v-card-title>
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ item.category}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              {{ item.content }}
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange lighten-2" outlined>
                Edit
              </v-btn>
              <v-btn color="red lighten-2" outlined>
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
    }
  }
</script>
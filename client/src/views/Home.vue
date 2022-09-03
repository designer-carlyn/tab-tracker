<template>
  <div>
    <v-container>
      <v-row>
        <v-col sm="4" xl="3" v-for="item in posts" :key="item._id">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="`http://localhost:8081/${item.image}`" height="200px"></v-img>

            <v-card-title>
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ item.category}}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" outlined>
                Edit
              </v-btn>
              <v-btn color="red lighten-2" outlined>
                Delete
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ item.content }}
                </v-card-text>
              </div>
            </v-expand-transition>
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
        show: false,
      }
    },

    async created() {
      this.posts = await API.getAllPost();
      console.log(this.posts)
    }
  }
</script>
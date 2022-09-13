<template>
    <div>
        <v-container>
            <v-card class="mx-auto" max-width="800">
                <v-img :src="`/${post.image}`" height="700"></v-img>

                <v-card-title>
                    {{ post.title }}
                </v-card-title>

                <v-card-subtitle class="text-uppercase">
                    {{ post.category}}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                    {{ post.content }}
                </v-card-text>

                <v-card-actions>
                    <v-btn color="orange lighten-1" dark :to="{ name: 'EditPost', params: { id: this.$route.params.id } }">
                        Edit
                    </v-btn>
                    <v-btn color="red lighten-1" dark @click="removePost(post._id)">
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import API from '../api'

    export default {
        name: 'Post',

        data() {
            return {
                post: {},
            }
        },

        async created() {
            this.post = await API.getPostById(this.$route.params.id);
        },

        methods: {
            async removePost(id) {
                const response = await API.deletePost(id)
                this.$router.push({name: 'Home', params: { message: response.message }})
            }
        }
    }
</script>
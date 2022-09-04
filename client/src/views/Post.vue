<template>
    <div>
        <v-container>
            <v-card class="mx-auto" max-width="800">
                <v-img :src="`/${post.image}`" height="700"></v-img>

                <v-card-title>
                    {{ post.title }}
                </v-card-title>

                <v-card-subtitle>
                    {{ post.category}}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                    {{ post.content }}
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
        }
    }
</script>
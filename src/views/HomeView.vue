<template>
  <div class="home">
    <div v-if="showPosts">
      <PostsList :posts="posts"></PostsList>
    </div>

    <button @click="showPosts=!showPosts">toggle post lists</button>
    <button @click="posts.pop()">delete</button>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import { ref } from 'vue';
export default {
  components: { PostsList },
  setup() {
    let showPosts = ref(true);
    let posts = ref([
      {title: "post title 1", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla exercitationem quae quod. Quos molestiae rem nam quis aperiam, cum veritatis odio necessitatibus, quae voluptatem aut. A eius aspernatur veniam tempore.", id: 1},
      {title: "post title 2", body: "post body 2", id: 2},
    ]);

    return { posts, showPosts };
  }
}
</script>

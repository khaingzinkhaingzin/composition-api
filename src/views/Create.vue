<template>
  <form @submit.prevent="addPost">
    <label>Title</label>
    <input type="text" required v-model="title">

    <label>Body</label>
    <textarea required v-model="body"></textarea>

    <label>Tags (hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
    <div v-for="tag in tags" :key="tag" class="pill">
        {{ tag }}
    </div>

    <div class="center">
        <button class="create">add post</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
export default {
    setup() {
        let router = useRouter();

        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);

        let handleKeydown = () => {
            if (!tags.value.includes(tag.value)) {
                tags.value.push(tag.value);
            }
            tag.value = "";
        };

        let addPost = async () => {
            try {
                await fetch("http://localhost:3000/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: title.value,
                        body: body.value,
                        tags: tags.value,
                    })
                });

                // redirect router to home 
                router.push("/");
            } catch (err) {
                console.log(err.message);
            }
        };

        return {title, body, tag, handleKeydown, tags, addPost};
    }
}
</script>

<style>
body {
    background: rgb(241, 250, 255);
}
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,
select,
textarea {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.create {
  background-color: royalblue;
  padding: 8px 50px;
  color: white;
  border-radius: 5px;
  margin-top: 25px;
  border: 1px solid grey;
}
.center {
    text-align: center;
}
.pill {
    background-color: #f6f6f6;;
    border: 1px solid #aaa;
    border-radius: 5px;
    display: inline-block;
    padding: 1px 5px;
    margin: 5px 3px;
}
</style>
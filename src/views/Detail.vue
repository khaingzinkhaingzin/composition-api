<template>
	<div v-if="error">{{ error }}</div>
	<div v-else>
		<div v-if="post" class="post">
			<h2>{{ post.title }}</h2>
			<p>{{ post.body }}</p>
            <!-- <div v-for="tag in post.tags" :key="tag" class="pill">
                {{ tag }}
            </div> -->
            <button class="delete" @click="deletePost">delete</button>

		</div>
		<div v-else>
            <Spinner></Spinner>   
        </div>
	</div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost";
import { useRoute, useRouter } from 'vue-router'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config"

export default {
  components: { Spinner },
	props: ["id"],
	setup(props) {
        let route = useRoute();
        let router = useRouter();

        console.log(route.params.id);
		let { post, error, load } = getPost(props.id);
		load();

        let deletePost = async () => {
            await deleteDoc(doc(db, "posts", props.id));
            router.push("/");
        }

		return { post, error, deletePost };
	},
};
</script>

<style>
.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}
.post h2 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
}
.post h2::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);

}
.pill {
    background-color: #f6f6f6;;
    border: 1px solid #aaa;
    border-radius: 5px;
    display: inline-block;
    padding: 1px 5px;
    margin: 5px 3px;
}
button.delete {
    margin: 30px auto;
    background: #ff8800;
    padding: 5px 20px;
    border: 1px solid #ccc;
    cursor: pointer;
}
</style>

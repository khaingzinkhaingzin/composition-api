<template>
	<div v-if="error">{{ error }}</div>
	<div v-else>
		<div v-if="post">
			<h1>{{ post.title }}</h1>
			<p>{{ post.body }}</p>
		</div>
		<div v-else>
            <Spinner></Spinner>   
        </div>
	</div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost";
export default {
  components: { Spinner },
	props: ["id"],
	setup(props) {
		let { post, error, load } = getPost(props.id);
		load();
		return { post, error };
	},
};
</script>

<style></style>

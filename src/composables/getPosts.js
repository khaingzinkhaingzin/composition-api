import { ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config"

let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async () => {
      try {
        const res = await getDocs(collection(db, "posts"));
        posts.value = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      } catch(err) {
        error.value = err.message;
      }
    };

    return { posts, error, load };
}

export default getPosts;
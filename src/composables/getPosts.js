import { ref } from "vue";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config"

let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("created_at", "desc"));
        const res = await getDocs(q);
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
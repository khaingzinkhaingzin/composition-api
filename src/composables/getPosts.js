import { ref } from "vue";
import { db } from "../firebase/config"
import { collection, getDocs } from "firebase/firestore";

let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async () => {
      try {
        // we need to await because we get Promise from get();
        let res = await getDocs(collection(db, "posts"));
        console.log(res);
      } catch(err) {
        error.value = err.message;
      }
    };

    return { posts, error, load };
}

export default getPosts;
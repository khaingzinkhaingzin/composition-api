import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config"

let getPost = (id) => {
    let post = ref(null);
    let error = ref("");

    let load = async () => {
        try {
            const docRef = doc(db, "posts", id);
            let postDoc = await getDoc(docRef);
            post.value = { id: doc.id, ...postDoc.data() };
        } catch (err) {
            error.value = err.message;
        }
    };

    return {post, error, load};
};

export default getPost
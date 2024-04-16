import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyA7EUbwqPMG0YZQGHiZKFQUV3VWXdxIq8s",
	authDomain: "vue-blog-system-b451b.firebaseapp.com",
	projectId: "vue-blog-system-b451b",
	storageBucket: "vue-blog-system-b451b.appspot.com",
	messagingSenderId: "1042463582834",
	appId: "1:1042463582834:web:7996d0188d6675532d70eb",
};

// init firebase 
firebase.initializeApp(firebaseConfig)

let db = firebase.firestore();

export { db }
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA7EUbwqPMG0YZQGHiZKFQUV3VWXdxIq8s",
	authDomain: "vue-blog-system-b451b.firebaseapp.com",
	projectId: "vue-blog-system-b451b",
	storageBucket: "vue-blog-system-b451b.appspot.com",
	messagingSenderId: "1042463582834",
	appId: "1:1042463582834:web:7996d0188d6675532d70eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }
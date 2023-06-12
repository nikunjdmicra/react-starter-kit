import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyA4O__91miIHcD60CvaaYnrjkWMNIhxo8Q",
    authDomain: "neural-mantra-332410.firebaseapp.com",
    databaseURL: "https://neural-mantra-332410-default-rtdb.firebaseio.com",
    projectId: "neural-mantra-332410",
    storageBucket: "neural-mantra-332410.appspot.com",
    messagingSenderId: "18020440034",
    appId: "1:18020440034:web:44071889ce9acacd304bbb",
    measurementId: "G-4T8RDKFQRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
export const fireStoreDb = getFirestore(app);


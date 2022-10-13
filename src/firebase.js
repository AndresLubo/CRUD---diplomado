// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";

import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ZKUJiZhJyVfCfX6hntp9ulT2J-Y3hwQ",
  authDomain: "crud-diplomado-93f95.firebaseapp.com",
  projectId: "crud-diplomado-93f95",
  storageBucket: "crud-diplomado-93f95.appspot.com",
  messagingSenderId: "906690152190",
  appId: "1:906690152190:web:c447adb217d17f27bb07af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
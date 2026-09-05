const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAdg0NHtJXf4bcieJIRIrKpZphj-DV_T_0",
  authDomain: "giovanni-bertolazzi.firebaseapp.com",
  projectId: "giovanni-bertolazzi",
  storageBucket: "giovanni-bertolazzi.firebasestorage.app",
  messagingSenderId: "325607330174",
  appId: "1:325607330174:web:98e038db0a6893c87ae32f"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firestore initialized successfully!");

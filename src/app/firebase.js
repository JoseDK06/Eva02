  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDMEzh9eZX2NQ9XdeTdHSFQr_62B9G1nkQ",
    authDomain: "login-firebase-5de0a.firebaseapp.com",
    projectId: "login-firebase-5de0a",
    storageBucket: "login-firebase-5de0a.appspot.com",
    messagingSenderId: "933373628622",
    appId: "1:933373628622:web:c7df900e1fda531547409f"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
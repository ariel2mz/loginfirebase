  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBnAF904j1PxfvtApEefSEm0BDT2Kj8txU",
    authDomain: "donation-center-503e8.firebaseapp.com",
    projectId: "donation-center-503e8",
    storageBucket: "donation-center-503e8.firebasestorage.app",
    messagingSenderId: "472485917044",
    appId: "1:472485917044:web:379448c95329aa1b6d7c21",
    measurementId: "G-HKGBMZ33RJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

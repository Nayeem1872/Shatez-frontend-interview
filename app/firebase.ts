// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGEsAuQ5f93SZv5Gvu53WjjMpUOmfU7So",
  authDomain: "auth-shatez-interview-frontend.firebaseapp.com",
  projectId: "auth-shatez-interview-frontend",
  storageBucket: "auth-shatez-interview-frontend.appspot.com",
  messagingSenderId: "231510604673",
  appId: "1:231510604673:web:b720c946476c2d4d768680"
};

// Initialize Firebase
const app = getApps().length ? getApp() :  initializeApp(firebaseConfig);

export {app}
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYhw29Q3ydOeqrFc9G_IHbAfh0l_JwzGI",
  authDomain: "petopia-authentication.firebaseapp.com",
  projectId: "petopia-authentication",
  storageBucket: "petopia-authentication.appspot.com",
  messagingSenderId: "85423185009",
  appId: "1:85423185009:web:62e9b499c12106c9c0cfd0"
};

const app = initializeApp(firebaseConfig);
export default app;
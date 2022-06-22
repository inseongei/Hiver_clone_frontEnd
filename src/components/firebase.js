import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDgl8xeJ6Rz4Ff0JVZ2Rm_r0EhOHLxC3tg",
  authDomain: "hiver-57fa1.firebaseapp.com",
  projectId: "hiver-57fa1",
  storageBucket: "hiver-57fa1.appspot.com",
  messagingSenderId: "523499116160",
  appId: "1:523499116160:web:0f5bdb46709068c0beb865",
  measurementId: "G-K1XHTM83T0",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export default app;
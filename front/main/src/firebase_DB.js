import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDYDl78ngALxSwTZmwT1wXYIGZvMEaZqLg",
    authDomain: "keybodo-d907c.firebaseapp.com",
    databaseURL: "https://keybodo-d907c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "keybodo-d907c",
    storageBucket: "keybodo-d907c.appspot.com",
    messagingSenderId: "484745704400",
    appId: "1:484745704400:web:9f90a7ca3854e965843fd5"
  };

const app=initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
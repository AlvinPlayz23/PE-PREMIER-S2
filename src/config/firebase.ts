import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBsA1R_GFtkhuyUmpySjeTpkl0Xw_PcD8M",
  authDomain: "pe-premier.firebaseapp.com",
  projectId: "pe-premier",
  storageBucket: "pe-premier.firebasestorage.app",
  messagingSenderId: "1089516174519",
  appId: "1:1089516174519:web:70ddc088a9ac822bd2e132",
  measurementId: "G-B0HQK88LXE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
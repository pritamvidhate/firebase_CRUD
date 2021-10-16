import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDAvGWnOogCC8v6Di0b3oFDAYNlcqp8VSU',
  authDomain: 'fir-proj-303c3.firebaseapp.com',
  projectId: 'fir-proj-303c3',
  storageBucket: 'fir-proj-303c3.appspot.com',
  messagingSenderId: '173896251449',
  appId: '1:173896251449:web:117bb0849184b8847475e8',
  measurementId: 'G-S69H0L67QP',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

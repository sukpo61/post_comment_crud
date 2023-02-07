import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAFLJBTRtZGaUrpmL39oxxnlOwJvZs8tE0',
  authDomain: 'open-an-account-31857.firebaseapp.com',
  projectId: 'open-an-account-31857',
  storageBucket: 'open-an-account-31857.appspot.com',
  messagingSenderId: '62978638072',
  appId: '1:62978638072:web:e3c54540cd4c2b11447b0d',
  measurementId: 'G-ENB9S2CV1E',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const db = getFirestore(app);

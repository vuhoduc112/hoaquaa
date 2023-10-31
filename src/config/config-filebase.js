import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDrtXBQo8bEGX9AV6mEDMKppaox7gluQlY',
    authDomain: 'filebasefloris.firebaseapp.com',
    projectId: 'filebasefloris',
    storageBucket: 'filebasefloris.appspot.com',
    messagingSenderId: '695157627630',
    appId: '1:695157627630:web:95309548edebddcf91f1ff',
    measurementId: 'G-J4YH1TTLHW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

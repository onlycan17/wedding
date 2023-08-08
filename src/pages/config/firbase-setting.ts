// Import the functions you need from the SDKs you need
import {initializeApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import logDev from "@/pages/config/log";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_PROJECT_ID,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

let app;
// Initialize Firebase
try {
    app = initializeApp(firebaseConfig);
    logDev('firebase init!!!!');
} catch (error) {
    logDev(error);
    app = getApps()[0];
}

logDev(app);
const auth = getAuth(app);
auth.languageCode = 'ko';
const db = getFirestore(app);

// const analytics = getAnalytics(app);

export {auth, db, app};
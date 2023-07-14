// Import the functions you need from the SDKs you need
import {initializeApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAy18Sd-pssScKd8BMRhYFv8KaWwqQqcww",
//   authDomain: "provicewedding.firebaseapp.com",
//   projectId: "provicewedding",
//   storageBucket: "provicewedding.appspot.com",
//   messagingSenderId: "382155878703",
//   appId: "1:382155878703:web:2549e0a280f8ad550771da",
//   measurementId: "G-DWLPKL0YZX"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCMzzIlKhKz_lPVGli-NUEg4c40kYEyUik",
  authDomain: "weddingmanagement-52f64.firebaseapp.com",
  projectId: "weddingmanagement-52f64",
  storageBucket: "weddingmanagement-52f64.appspot.com",
  messagingSenderId: "122531482608",
  appId: "1:122531482608:web:2ffa4afb728bfef4b42b35",
  measurementId: "G-KW8RDEPTHP"
};


let app;
// Initialize Firebase
if(!getApps().length){
  app = initializeApp(firebaseConfig);
}else{
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);



export {auth, db};
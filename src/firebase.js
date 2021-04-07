
import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZ1v9fUWamu_IuOaT9yoxUsqitHwyg-jU",
    authDomain: "fir-react-crud-dfd57.firebaseapp.com",
    projectId: "fir-react-crud-dfd57",
    storageBucket: "fir-react-crud-dfd57.appspot.com",
    messagingSenderId: "943864976703",
    appId: "1:943864976703:web:05dd6a782e403761072f8a"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

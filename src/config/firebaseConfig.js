import firebase from 'firebase/app';
import 'firebase/storage';

//intialise Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAJcMusTE_FxGop-Ihf0qi2xxwFhGGTHjo",
    authDomain: "mytshirtapp-f0d23.firebaseapp.com",
    databaseURL: "https://mytshirtapp-f0d23.firebaseio.com",
    projectId: "mytshirtapp-f0d23",
    storageBucket: "mytshirtapp-f0d23.appspot.com",
    messagingSenderId: "209417573050",
    appId: "1:209417573050:web:f8cd32f2354c4708382883",
    measurementId: "G-9YHYYMPR9M"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}
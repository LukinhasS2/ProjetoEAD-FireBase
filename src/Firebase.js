import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUBNHhkBgBo6JBdBMdPPjVMWqi9dk2NIM",
    authDomain: "projetoead-b3471.firebaseapp.com",
    projectId: "projetoead-b3471",
    storageBucket: "projetoead-b3471.appspot.com",
    messagingSenderId: "990552177607",
    appId: "1:990552177607:web:c0bb91a12f7bf585eff7e2"
  };


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
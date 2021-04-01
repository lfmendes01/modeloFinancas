import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDZyfya1cqryJEWP0Xp_IxzRyjaqRp0Tig",
    authDomain: "demobasic-dd8c6.firebaseapp.com",
    databaseURL: "https://demobasic-dd8c6.firebaseio.com",
    projectId: "demobasic-dd8c6",
    storageBucket: "demobasic-dd8c6.appspot.com",
    messagingSenderId: "564816855120",
    appId: "1:564816855120:web:da27341cc282fde4f55155"
  };

if(!firebase.apps.length){
  //Abrir minha conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
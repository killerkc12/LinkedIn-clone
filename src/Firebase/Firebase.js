import firebase  from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDOERPR96QAB3LmgT_scmFVYZLu_tikoKg",
    authDomain: "linkedin-clone-c2f05.firebaseapp.com",
    projectId: "linkedin-clone-c2f05",
    storageBucket: "linkedin-clone-c2f05.appspot.com",
    messagingSenderId: "795379624161",
    appId: "1:795379624161:web:1a2e57cbc3c50c360dafa0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth}
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCTImWFT53FpbTIVBONydlIILpB4TGUjtY",
    authDomain: "facebook-clone-4a3ef.firebaseapp.com",
    projectId: "facebook-clone-4a3ef",
    storageBucket: "facebook-clone-4a3ef.appspot.com",
    messagingSenderId: "420018654328",
    appId: "1:420018654328:web:648909fa96b4525996f18d",
    measurementId: "G-GMMHWCB289"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;
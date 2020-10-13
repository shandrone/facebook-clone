// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAseI1ZvP_KGV6x5yCsFNtEovWkYBVqiqk",
    authDomain: "social-app-10db7.firebaseapp.com",
    databaseURL: "https://social-app-10db7.firebaseio.com",
    projectId: "social-app-10db7",
    storageBucket: "social-app-10db7.appspot.com",
    messagingSenderId: "504441149666",
    appId: "1:504441149666:web:138b63ee4d702d470c66bb",
    measurementId: "G-Z4FNL0V1GW"
  };

  //connecting react front end with firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); //connecting firebase database with this application
  const auth = firebase.auth(); //firebase authorization
  const provider = new firebase.auth.GoogleAuthProvider(); // we want the google login service here


  export {auth, provider};
  export default db;




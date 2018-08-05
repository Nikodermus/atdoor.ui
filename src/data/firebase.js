import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCnKNNuvbXKRCRq28Iz0wBY-EZiJH_gf5Y",
    authDomain: "atdoor-a9f40.firebaseapp.com",
    databaseURL: "https://atdoor-a9f40.firebaseio.com",
    projectId: "atdoor-a9f40",
    storageBucket: "atdoor-a9f40.appspot.com",
    messagingSenderId: "607442719803"
  };


firebase.initializeApp(config);
export default firebase;

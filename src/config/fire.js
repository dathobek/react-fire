import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB5di0A9lbWn_KmUvU33GvFUP9lgdyfo7E",
    authDomain: "react-fire-27865.firebaseapp.com",
    databaseURL: "https://react-fire-27865.firebaseio.com",
    projectId: "react-fire-27865",
    storageBucket: "react-fire-27865.appspot.com",
    messagingSenderId: "265560131606"
};

const fire = firebase.initializeApp(config);
export default fire;
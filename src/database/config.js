import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyD_owbodvoZi6rhUEKuoRYo7BU8sRcK2Js",
  authDomain: "photowall-547fe.firebaseapp.com",
  databaseURL: "https://photowall-547fe.firebaseio.com",
  projectId: "photowall-547fe",
  storageBucket: "photowall-547fe.appspot.com",
  messagingSenderId: "428008993344",
  appId: "1:428008993344:web:fc2dc78bae000e31"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };

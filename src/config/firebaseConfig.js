import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCYa4o0GD2nz4Aa1VPRBIt1cWxe69_Zhqo",
  authDomain: "dnd-controller.firebaseapp.com",
  databaseURL: "https://dnd-controller.firebaseio.com",
  projectId: "dnd-controller",
  storageBucket: "",
  messagingSenderId: "1098151045458"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

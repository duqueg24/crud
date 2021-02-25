import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCbZw4m57kjUO9jEBCTXbSCE1IgEidR7gU",
    authDomain: "crud-220bc.firebaseapp.com",
    projectId: "crud-220bc",
    storageBucket: "crud-220bc.appspot.com",
    messagingSenderId: "1041820197359",
    appId: "1:1041820197359:web:f6bd106a6901aa16e1561a"
  }

  export const firebaseApp=firebase.initializeApp(firebaseConfig)

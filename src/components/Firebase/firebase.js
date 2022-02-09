import firebase from 'firebase/app';
import '@firebase/firestore'; 

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyD5e3zBhpnUVDsJ4cgj2o8wohWYY4nzELk",
    authDomain: "ohmyshoes-ecommerce.firebaseapp.com",
    projectId: "ohmyshoes-ecommerce",
    storageBucket: "ohmyshoes-ecommerce.appspot.com",
    messagingSenderId: "47761278089",
    appId: "1:47761278089:web:62283c6b802cd53884f258"
  });


export const getFirestore = () => {
    return firebase.firestore(firebaseConfig);
};

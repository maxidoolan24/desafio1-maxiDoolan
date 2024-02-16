import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import motos from '../utilidades/data.js';


const firebaseConfig = {
    apiKey: "AIzaSyAJ7TcwgO0Z-9EuC7kP-rj1T6qmHgeEdUw",
    authDomain: "tiendamydmotos.firebaseapp.com",
    projectId: "tiendamydmotos",
    storageBucket: "tiendamydmotos.appspot.com",
    messagingSenderId: "459162204388",
    appId: "1:459162204388:web:43a2c3214fc9a2641714f1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionRef = collection(db, 'productos');  

const dataArray = motos


dataArray.forEach(async (data) => {
  try {
    const docRef = await addDoc(collectionRef, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});


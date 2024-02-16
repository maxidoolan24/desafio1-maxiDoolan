import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJ7TcwgO0Z-9EuC7kP-rj1T6qmHgeEdUw",
  authDomain: "tiendamydmotos.firebaseapp.com",
  projectId: "tiendamydmotos",
  storageBucket: "tiendamydmotos.appspot.com",
  messagingSenderId: "459162204388",
  appId: "1:459162204388:web:43a2c3214fc9a2641714f1"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db
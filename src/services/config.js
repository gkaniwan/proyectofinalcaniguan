import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW1emHgd5rncGc49sA_1YyOsW13AoohYU",
  authDomain: "proyectofinalcaniguan.firebaseapp.com",
  projectId: "proyectofinalcaniguan",
  storageBucket: "proyectofinalcaniguan.appspot.com",
  messagingSenderId: "326587275303",
  appId: "1:326587275303:web:040248d59945b2455c1602"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


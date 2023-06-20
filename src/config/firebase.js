import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDDIXgWJRW-vRMiRH2zzomKBOhnF4pNz9Y",
  authDomain: "tiktok-jornada-zuehtam.firebaseapp.com",
  projectId: "tiktok-jornada-zuehtam",
  storageBucket: "tiktok-jornada-zuehtam.appspot.com",
  messagingSenderId: "439679003743",
  appId: "1:439679003743:web:eddc08773d85e140d0ffea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
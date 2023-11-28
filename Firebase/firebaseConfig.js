// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, get, child, remove } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFyyCPoDZohpRZu9E2fyNH178VwOKEwcQ",
  authDomain: "fir-realtime-database-8bb68.firebaseapp.com",
  projectId: "fir-realtime-database-8bb68",
  storageBucket: "fir-realtime-database-8bb68.appspot.com",
  messagingSenderId: "881922040912",
  appId: "1:881922040912:web:2729a065f5feea0be01d55",
  measurementId: "G-JZE5QTZL2K"
};

const app = initializeApp(firebaseConfig);
const appDatabase = getDatabase(app);
const dbRef = ref(appDatabase);
const usersRef = ref(appDatabase, "users/");;

export {
    app,
    appDatabase,
    ref,
    set,
    get,
    dbRef,
    child,
    remove,
    usersRef,
};

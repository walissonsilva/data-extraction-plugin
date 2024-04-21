import { initializeApp } from "firebase/app";
import { env } from "src/env";

const firebaseConfig = {
  apiKey: env.Firebase.ApiKey,
  authDomain: "data-extraction-hand-talk.firebaseapp.com",
  projectId: "data-extraction-hand-talk",
  storageBucket: "data-extraction-hand-talk.appspot.com",
  messagingSenderId: "533069882062",
  appId: "1:533069882062:web:136d0c0ca9c0a6b687a69f",
  databaseURL: "https://data-extraction-hand-talk-default-rtdb.firebaseio.com",
};

export const firebaseApp = initializeApp(firebaseConfig);

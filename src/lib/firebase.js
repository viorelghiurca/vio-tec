// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Ohne vollständige Konfiguration (z. B. lokal ohne .env) wirft getAnalytics()
// beim App-Start — dann läuft die Seite ohne Analytics weiter.
let analytics = null;

if (firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId) {
  try {
    const app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn('Firebase Analytics konnte nicht initialisiert werden:', error);
  }
}

export { analytics };

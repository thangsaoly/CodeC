export const firebaseConfig = {
  apiKey: "AIzaSyCU0Rf5Iouc-6hnfl8pi9hVwhXFzdMqN0w",
  authDomain: "codectest-908070.firebaseapp.com",
  projectId: "codectest-908070",
  storageBucket: "codectest-908070.firebasestorage.app",
  messagingSenderId: "88635662313",
  appId: "1:88635662313:web:b31e66a1db18e96f0ff578",
  measurementId: "G-C2LFP69Z64"
};

export function isFirebaseConfigured() {
  return Object.values(firebaseConfig).every(val => val !== 'PASTE-YOURS' && typeof val === 'string' && val.trim() !== '');
}

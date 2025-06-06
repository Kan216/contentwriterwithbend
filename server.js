import express from 'express';
const app = express();

// ...existing code...
// Placeholder to move later
app.get('/favicon.ico', (req, res) => res.status(204).end());
// ...existing code...
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-OdnMjad6fe1KtddpNtBoxdDdMxE91RY",
  authDomain: "contentwriter-20e8d.firebaseapp.com",
  projectId: "contentwriter-20e8d",
  storageBucket: "contentwriter-20e8d.firebasestorage.app",
  messagingSenderId: "804785009895",
  appId: "1:804785009895:web:9661687478213eb7211e42"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider();

// Serve static files from the current directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Removed /login route to avoid conflict with frontend authentication

app.listen(port, () => {
  console.log("Server started on port " + port);
});
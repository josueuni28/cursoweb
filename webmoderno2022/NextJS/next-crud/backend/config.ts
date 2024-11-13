// IMPORTANTE: Foi usado o Firebase@8.8.0 (Versão antiga) pelo fato da compatibilidade com o projeto

import firebase from "firebase"
import 'firebase/firestore'

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        project: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4AE3VabeLkAWHmLbZ10oR4LWY69jkx5Y",
    authDomain: "thrail.firebaseapp.com",
    projectId: "thrail",
    storageBucket: "thrail.firebasestorage.app",
    messagingSenderId: "672035725620",
    appId: "1:672035725620:web:ffa5e8f734a2b492e78561",
    measurementId: "G-46M7F3J975"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const uploadProcessedData = async() => {
    const dataToUpload = {
        name: "Banahaw",
        province: "Laguna"
    };

    try{
        const document = doc(db, "mountain", "Banahaw_ID");
        let dataUpdated = await setDoc(document, dataToUpload);
        console.log("succcess");
        return dataUpdated;
    } catch (error){
        console.log(error);
    }
}

export const db = getFirestore(app);
export const auth = getAuth(app);
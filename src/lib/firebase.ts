
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

// IMPORTANT: Replace this with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// --- TYPES ---

export interface GalleryImage {
    id: string;
    order: number;
    imageUrl: string;
    alt: string;
    width: number;
    height: number;
}

export interface Video {
    id: string;
    order: number;
    title: string;
    description: string;
    duration: string;
    videoUrl: string;
    thumbnailUrl: string;
}


// --- DATA FETCHING FUNCTIONS ---

/**
 * Fetches gallery images from the 'galleryImages' collection in Firestore,
 * ordered by the 'order' field.
 */
export async function getGalleryImages(): Promise<GalleryImage[]> {
    try {
        const imagesCollection = collection(db, "galleryImages");
        const q = query(imagesCollection, orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        
        const images = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as GalleryImage));

        return images;
    } catch (error) {
        console.error("Error fetching gallery images from Firestore:", error);
        // Depending on your error handling strategy, you might want to:
        // - Return an empty array
        // - Throw the error to be caught by the caller
        // - Return some default/placeholder data
        return []; 
    }
}


/**
 * Fetches videos from the 'videos' collection in Firestore,
 * ordered by the 'order' field.
 */
export async function getVideos(): Promise<Video[]> {
    try {
        const videosCollection = collection(db, "videos");
        const q = query(videosCollection, orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);

        const videos = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Video));

        return videos;
    } catch (error) {
        console.error("Error fetching videos from Firestore:", error);
        return [];
    }
}

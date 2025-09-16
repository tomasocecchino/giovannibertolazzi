
import { initializeApp, getApps, getApp, FirebaseOptions } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

// IMPORTANT: Replace this with your actual Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAdg0NHtJXf4bcieJIRIrKpZphj-DV_T_0",
  authDomain: "giovanni-bertolazzi.firebaseapp.com",
  projectId: "giovanni-bertolazzi",
  storageBucket: "giovanni-bertolazzi.firebasestorage.app",
  messagingSenderId: "325607330174",
  appId: "1:325607330174:web:98e038db0a6893c87ae32f"
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
    description?: string;
    photographer?: string;
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

export interface Concert {
    id: string;
    date: any; // Can be a Timestamp from Firestore
    city: string;
    venue: string;
    ticketLink: string;
    imageUrl?: string;
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

/**
 * Fetches concerts from the 'concerts' collection in Firestore,
 * ordered by the 'date' field.
 */
export async function getConcerts(): Promise<Concert[]> {
    try {
        const concertsCollection = collection(db, "concerts");
        const q = query(concertsCollection, orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);

        const concerts = querySnapshot.docs.map(doc => {
            const data = doc.data();
            let date;

            if (data.date instanceof Timestamp) {
                date = data.date.toDate();
            } else if (typeof data.date === 'string') {
                date = new Date(data.date);
            } else {
                // If date is in another format or missing, log a warning and use current date as fallback
                console.warn(`Invalid date format for concert ${doc.id}:`, data.date);
                date = new Date();
            }
            
            return {
                id: doc.id,
                ...data,
                date: date.toISOString(), // Standardize to ISO string
            } as Concert;
        });

        return concerts;
    } catch (error: any) {
        console.error("Error fetching concerts from Firestore:", error);
        // Throwing a more detailed error to be handled by the component
        throw new Error(`Could not fetch concerts. Please check Firestore permissions and data format. Original error: ${error.message}`);
    }
}

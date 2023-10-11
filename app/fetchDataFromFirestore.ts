import { firebase } from './firebase';

async function fetchDataFromFirestore() {
  try {
    const db = firebase.firestore();
    const collectionRef = db.collection('users'); // Replace with your collection name.

    const snapshot = await collectionRef.get();
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

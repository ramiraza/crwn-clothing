import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCRA8sYDMIXddiyjXZ0P8-D3XL_1nN_V-k',
	authDomain: 'crown-db-51e06.firebaseapp.com',
	projectId: 'crown-db-51e06',
	storageBucket: 'crown-db-51e06.appspot.com',
	messagingSenderId: '621556805412',
	appId: '1:621556805412:web:db9f2b5070d3bd1efccdb1',
	measurementId: 'G-V0TC4XG092',
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDoc = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error('error while creating user:', error.message);
		}
	}

	return userRef;
};

export default firebase;

import * as firebase from "firebase";
const config = {
	apiKey: "AIzaSyCZGVKSrrvi7v2z2PaVLN84dILJ2eHQJeg",
	authDomain: "farmily-1f4f1.firebaseapp.com",
	databaseURL: "https://farmily-1f4f1.firebaseio.com",
	projectId: "farmily-1f4f1",
	storageBucket: "farmily-1f4f1.appspot.com",
	messagingSenderId: "821996450611",
	appId: "1:821996450611:web:354a66d32a7fc98063c446",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const db = firebase.firestore();
export { firebase, db };

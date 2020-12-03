import * as firebase from "firebase";
import "firebase/functions";
const config = {
	apiKey: "AIzaSyCZGVKSrrvi7v2z2PaVLN84dILJ2eHQJeg",
	authDomain: "farmily-1f4f1.firebaseapp.com",
	databaseURL: "https://farmily-1f4f1.firebaseio.com",
	projectId: "farmily-1f4f1",
	storageBucket: "farmily-1f4f1.appspot.com",
	messagingSenderId: "821996450611",
	appId: "1:821996450611:web:354a66d32a7fc98063c446",
};

const config2 = {
	apiKey: "AIzaSyDQ6g1zVf_Bfc4CeH5QcpEYV4zqBt0qxzU",
	authDomain: "idks-8568d.firebaseapp.com",
	databaseURL: "https://idks-8568d.firebaseio.com",
	projectId: "idks-8568d",
	storageBucket: "idks-8568d.appspot.com",
	messagingSenderId: "834276797342",
	appId: "1:834276797342:web:be6e64316d25c07db8848f",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config2);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();
export { firebase, db, auth, storage, functions };

import { firebase, db } from "../firebase";
import { getUseWithUID } from "./readData";

const User = db.collection("users");
const Post = db.collection("post");

const reateUset = (data, cb) => {
	const date = currentTime.now();
	data.createdTime = date;
	User.add(data).then(cb);
};

async function registerNewUser(email, password, confirmPassword, data) {
	if (password !== confirmPassword) {
		throw "Passwords don't match.";
	}
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((response) => {
			const uid = response.user.uid;
			const currentTime = firebase.firestore.FieldValue.serverTimestamp();
			data.createdTime = currentTime;
			data.id = uid;
			db.collection("users")
				.doc(uid)
				.set(data)
				.then(async () => {
					const user = await getUseWithUID(uid);
					return user;
				})
				.catch((error) => {
					throw error.message;
				});
		})
		.catch((error) => {
			throw error.message;
		});
}

export { registerNewUser };

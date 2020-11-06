import { firebase, db, functions } from "../firebase";
import { getUseWithUID } from "./readData";
import { uploadFile } from "../storage";
const Users = db.collection("users");
const Posts = db.collection("posts");

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
			Users.doc(uid)
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

async function uploadFiles(imageArray) {
	let imagesURL = [...imageArray].map(async (imageUri) => {
		return uploadFile(imageUri).then(async (data) => {
			return data;
		});
	});
	return Promise.all(imagesURL);
}

async function createPost(data) {
	const currentTime = firebase.firestore.FieldValue.serverTimestamp();
	data.createdTime = currentTime;
	return Posts.add(data)
		.then((doc) => {
			Posts.doc(doc.id).update({
				postId: doc.id,
			});

			return doc.id;
		})
		.catch((error) => {
			throw error.message;
		});
}

async function commentPost(postId, data) {
	const currentTime = firebase.firestore.FieldValue.serverTimestamp();
	data.createdTime = currentTime;
	return Posts.doc(postId)
		.collection("comment")
		.add(data)
		.then(() => {})
		.catch((error) => {
			throw error.message;
		});
}

export { registerNewUser, createPost, uploadFiles, commentPost };

import { firebase, db, functions } from "../firebase";
import { getCurrentUser, getUseWithUID } from "./readData";
import { uploadFile } from "../storage";
const Users = db.collection("users");
const Posts = db.collection("posts");
const Chats = db.collection("chats");

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
			data.chat = [];
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

const createChatRoom = async () => {
	const current = await getCurrentUser();
	const userGroup = {
		user1: current.id,
		user2: sendUser,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	};
	return Chats.add(userGroup).then((doc) => {
		db.collection("chats").doc(doc.id).update({ roomId: doc.id });
		db.collection("users")
			.doc(authContext.user.id)
			.update({ chats: firebase.firestore.FieldValue.arrayUnion(doc.id) });
		db.collection("users")
			.doc(sendUser)
			.update({ chats: firebase.firestore.FieldValue.arrayUnion(doc.id) });
		return doc.id;
	});
};

const insertChat = async (room, message) => {
	const current = await getCurrentUser();
	const data = {
		sendUser: current.id,
		message: message,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	};
	Chats.doc(room).collection("message").add(data);
};

export {
	registerNewUser,
	createPost,
	uploadFiles,
	commentPost,
	createChatRoom,
	insertChat,
};

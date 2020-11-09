import { firebase, db, functions } from "../firebase";
import { getCurrentUser, getUseWithUID } from "./readData";
import { uploadFile } from "../storage";
const Users = db.collection("users");
const Posts = db.collection("posts");
const Chats = db.collection("chats");
const SlaughterHouses = db.collection("slaughterhouses");
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

async function createPost(title, description, postType, images) {
	const current = await getCurrentUser();
	const data = {
		createdBy: { name: current.userName, id: current.id },
		title,
		description,
		postType,
		images,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	};
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

async function commentPost(postId, comment) {
	const current = await getCurrentUser();
	const data = {
		createdBy: current.userName,
		comment,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	};

	return Posts.doc(postId)
		.collection("comment")
		.add(data)
		.then(() => {})
		.catch((error) => {
			throw error.message;
		});
}

const createChatRoom = async (sendUser) => {
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

const createSlaughterHouse = (name, address) => {
	const data = {
		name,
		rating: 0,
		like: 0,
		address,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	};
	return SlaughterHouses.add(data).then((doc) => {
		SlaughterHouses.doc(doc.id).update({
			businessId: doc.id,
		});
		return doc.id;
	});
};

const createBooking = async (businessName, date, time, businessId) => {
	const current = await getCurrentUser();
	const data = {
		businessName,
		customer: `${current.firstName} ${current.lastName}`,
		date,
		time,
		isDone: false,
		isCancel: false,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	};
	SlaughterHouses.doc(businessId)
		.collection("booking")
		.add(data)
		.then(() => {
			Users.doc(current.id).collection("booking").add(data);
		});
};

export {
	registerNewUser,
	createPost,
	uploadFiles,
	commentPost,
	createChatRoom,
	insertChat,
	createSlaughterHouse,
	createBooking,
};

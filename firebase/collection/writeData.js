import { firebase, db, auth } from "../firebase";
import { getCurrentUser, getUseWithUID } from "./readData";
import { uploadFile } from "../storage";
const Users = db.collection("users");
const Posts = db.collection("posts");
const Chats = db.collection("chats");
const SlaughterHouses = db.collection("slaughterhouses");

/**
 * register new user
 * @date 2020-11-10
 * @param {string} email
 * @param {string} password
 * @param {string} confirmPassword
 * @param {object} data user data you want to insert to database
 * @returns {object} user object for
 */
async function registerNewUser(email, password, confirmPassword, data) {
	if (password !== confirmPassword) {
		throw "Passwords don't match.";
	}
	return auth
		.createUserWithEmailAndPassword(email, password)
		.then((response) => {
			const uid = response.user.uid;
			const currentTime = firebase.firestore.FieldValue.serverTimestamp();
			data.createdTime = currentTime;
			data.id = uid;
			data.chat = [];
			return Users.doc(uid)
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

/**
 * upload files
 * @date 2020-11-10
 * @param {array} filesArray
 * @returns {array of promise}
 */
async function uploadFiles(filesArray) {
	return Promise.all(
		[...filesArray].map(async (file) => {
			return uploadFile(file).then(async (data) => {
				return data;
			});
		})
	);
}

/**
 * create post with data
 * @date 2020-11-10
 * @param {object} data
 * @returns {string} post id
 */
async function createPost(data) {
	data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
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

/**
 * insert comment to a post
 * @date 2020-11-10
 * @param {string} postId
 * @param {string} comment
 * @returns {boolean}
 */
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
		.then(() => {
			return true;
		})
		.catch((error) => {
			throw error.message;
		});
}

/**
 * create a chatroom with another user
 * @date 2020-11-10
 * @param {string} sendUser other user's id
 * @returns {string} chat room id
 */
async function createChatRoom(sendUser) {
	const current = await getCurrentUser();
	const userGroup = {
		user1: current.id,
		user2: sendUser,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	};
	return Chats.add(userGroup).then((doc) => {
		Chats.doc(doc.id).update({ roomId: doc.id });
		Users.doc(authContext.user.id).update({
			chats: firebase.firestore.FieldValue.arrayUnion(doc.id),
		});
		Users.doc(sendUser).update({
			chats: firebase.firestore.FieldValue.arrayUnion(doc.id),
		});
		return doc.id;
	});
}

/**
 * insert chat to chat room by room id
 * @date 2020-11-10
 * @param {string} room
 * @param {string} message
 * @returns {boolean}
 */
async function insertChat(room, message) {
	const current = await getCurrentUser();
	const data = {
		sendUser: current.id,
		message: message,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	};
	Chats.doc(room).collection("message").add(data);
	return true;
}

/**
 * create SlaughterHouses
 * @date 2020-11-10
 * @param {string} name
 * @param {string} address
 * @returns {string} SlaughterHouse id
 */
async function createSlaughterHouse(name, address) {
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
}

/**
 * create book by needed information
 * @date 2020-11-10
 * @param {string} businessName
 * @param {string} date
 * @param {string} time
 * @param {string} businessId
 * @returns {boolean}
 */
async function createBooking(businessName, date, time, businessId) {
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
			return true;
		});
}

/**
 * create slahghterhouse booking by business name
 * @date 2020-11-24
 * @param {string} businessName
 * @param {string} date
 * @param {string} time
 * @returns {any}
 */
async function createSHBooking(businessName, date, time) {
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
	Users.doc(current.id).collection("booking").add(data);
	return true;
}

export {
	registerNewUser,
	createPost,
	uploadFiles,
	commentPost,
	createChatRoom,
	insertChat,
	createSlaughterHouse,
	createBooking,
	createSHBooking,
};

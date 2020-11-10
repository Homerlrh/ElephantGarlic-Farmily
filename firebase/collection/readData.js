import { firebase, db, auth } from "../firebase";
const Users = db.collection("users");
const Posts = db.collection("posts");
const Chats = db.collection("chats");

/**
 * get user info when login
 * @date 2020-11-10
 * @param {string} email
 * @param {string} password
 * @returns {object}
 *
 */
async function login(email, password) {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(async (response) => {
			const uid = response.user.uid;
			const user = await getUseWithUID(uid);
			return user;
		})
		.catch((error) => {
			throw error.message;
		});
}

/**
 * change password only when log in
 * @date 2020-11-10
 * @param {string} NP new password
 * @param {string} CNP confirm new password
 * @returns {boolean}
 */
async function changePassword(NP, CNP) {
	if (NP === CNP && NP !== "" && CNP !== "") {
		const user = auth.currentUser;
		if (user) {
			return user
				.updatePassword(CNP)
				.then(() => {
					return true;
				})
				.catch((err) => {
					throw "unknow err, please try again later";
				});
		}
	}
}

/**
 * logout function
 * @date 2020-11-10
 * @returns {boolean}
 */
function logout() {
	return auth
		.signOut()
		.then(function () {
			return true;
		})
		.catch(function (error) {
			throw error.message;
		});
}

/**
 * get user information with user id
 * @date 2020-11-10
 * @param {string} uid
 * @returns {object}
 */
async function getUseWithUID(uid) {
	return Users.where("id", "==", uid)
		.get()
		.then((data) => {
			let user;
			data.forEach((doc) => {
				user = { ...doc.data() };
			});
			if (!user) {
				throw "No user";
			}
			return user;
		});
}

/**
 * get user with user email
 * @date 2020-11-10
 * @param {sting} email
 * @returns {object}
 */
async function getUserWithEmail(email) {
	return Users.where("email", "==", email)
		.get()
		.then((data) => {
			let user;
			data.forEach((doc) => {
				user = { ...doc.data() };
			});
			if (!user) {
				throw "No user";
			}
			return user;
		});
}

/**
 * get user with user email
 * @date 2020-11-10
 * @param {sting} userName
 * @returns {object}
 */
async function getUserWithUsername(username) {
	return Users.where("userName", "==", username)
		.get()
		.then((data) => {
			let user;
			data.forEach((doc) => {
				user = { ...doc.data() };
			});
			if (!user) {
				throw "No user";
			}
			return user;
		});
}

/**
 * get current login user information
 * @date 2020-11-10
 * @returns {object}
 */
async function getCurrentUser() {
	try {
		const userId = auth.currentUser.uid;
		const user = await getUseWithUID(userId);
		return user;
	} catch (err) {
		throw err.message;
	}
}

/**
 * get all the post in database
 * @date 2020-11-10
 * @returns {array of objects}
 */
async function getAllPost() {
	const snapshot = await db
		.collection("posts")
		.orderBy("createdAt", "desc")
		.get();
	let array = [];
	snapshot.forEach(async (x) => {
		array = [...array, x.data()];
	});
	return array;
}

/**
 * get post by post id, get the detail post
 * @date 2020-11-10
 * @param {string} id
 * @returns {object}
 */
async function getPostById(id) {
	const snapshot = await Posts.where("postId", "==", id).get();
	let array = [];
	snapshot.forEach(async (x) => {
		array = [...array, x.data()];
	});
	return array[0];
}

/**
 * get all the comment from a post id
 * @date 2020-11-10
 * @param {string} id post id
 * @returns {array of object} post comments
 */
async function getAllCommentByPost(id) {
	const snapshot = await Posts.doc(id)
		.collection("comment")
		.orderBy("createdAt", "desc")
		.get();
	let array = [];
	snapshot.forEach(async (x) => {
		array = [...array, x.data()];
	});
	return array;
}

/**
 * get chat room with chat room id
 * store in user object
 * @date 2020-11-10
 * @param {string} id chat room id
 * @returns {object}
 */
async function getChatRoomById(id) {
	return Chats.where("roomId", "==", id)
		.get()
		.then((snapShots) => {
			let room = [];
			snapShots.forEach(async (snapshot) => {
				room = [...room, snapshot.data()];
			});
			return room[0];
		});
}

/**
 * get chat from a chat room
 * @date 2020-11-10
 * @param {string} id chat room id
 * @returns {object}
 */
async function getLatestChatByRoomId(id) {
	return Chats.doc(id)
		.collection("message")
		.orderBy("createdAt", "desc")
		.limit(1)
		.get()
		.then((snapShots) => {
			let c = [];
			snapShots.forEach((snapshot) => {
				c = [...c, snapshot.data()];
			});
			return c[0];
		});
}

/**
 * get all the chat list with the current user
 * @date 2020-11-10
 * @returns {Promise array}
 */
async function getCurrentUserChatList() {
	return getCurrentUser().then((data) => {
		return Promise.all(
			data.chats.map(async (chat) => await getChatRoomById(chat))
		);
	});
}

/**
 * get all the chat for current user plus lastest message and other user basic info
 * @date 2020-11-10
 * @returns {array of objects}
 */
async function chat() {
	const currentUser = await getCurrentUser();
	return getCurrentUserChatList().then((chats) => {
		return Promise.all(
			chats.map(async (chat) => {
				if (currentUser.id == chat.user1) {
					const otherUser = await getUseWithUID(chat.user2);
					chat.otherUser = {
						name: otherUser.userName,
						avatar: otherUser.avatar,
					};
				} else {
					const otherUser = await getUseWithUID(chat.user1);
					chat.otherUser = {
						name: otherUser.userName,
						avatar: otherUser.avatar,
					};
				}
				chat.latest = await getLatestChatByRoomId(chat.roomId);
				delete chat.user1;
				delete chat.user2;
				return chat;
			})
		);
	});
}

export {
	getUseWithUID,
	getUserWithEmail,
	getUserWithUsername,
	login,
	logout,
	getCurrentUser,
	getAllPost,
	getPostById,
	getAllCommentByPost,
	changePassword,
	chat,
};

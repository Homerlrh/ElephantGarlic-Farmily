import { firebase, db, auth } from "../firebase";
const Users = db.collection("users");
const Posts = db.collection("posts");
const Chats = db.collection("chats");

const login = (email, password) => {
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
};

const changePassword = async (NP, CNP) => {
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
};

const logout = () => {
	return auth
		.signOut()
		.then(function () {
			return true;
		})
		.catch(function (error) {
			throw error.message;
		});
};

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

async function getCurrentUser() {
	try {
		const userId = auth.currentUser.uid;
		const user = await getUseWithUID(userId);
		return user;
	} catch (err) {
		throw err.message;
	}
}

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

async function getPostById(id) {
	const snapshot = await Posts.where("postId", "==", id).get();
	let array = [];
	snapshot.forEach(async (x) => {
		array = [...array, x.data()];
	});
	return array[0];
}

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

const getChatRoomById = (id) => {
	return Chats.where("roomId", "==", id)
		.get()
		.then((snapShots) => {
			let room = [];
			snapShots.forEach(async (snapshot) => {
				room = [...room, snapshot.data()];
			});
			return room[0];
		});
};

const getChatByRoomId = (id) => {
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
};

const getCurrentUserChatList = () => {
	return getCurrentUser().then((data) => {
		return Promise.all(
			data.chats.map(async (chat) => await getChatRoomById(chat))
		);
	});
};

const chat = async () => {
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
				chat.latest = await getChatByRoomId(chat.roomId);
				delete chat.user1;
				delete chat.user2;
				return chat;
			})
		);
	});
};

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

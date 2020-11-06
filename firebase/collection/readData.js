import { firebase, db, auth } from "../firebase";
const Users = db.collection("users");
const Posts = db.collection("posts");

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
	const snapshot = await db.collection("posts").orderBy("createdTime").get();
	let array = [];
	snapshot.forEach(async (x) => {
		array = [...array, x.data()];
	});
	return array.reverse();
}

async function getPostById(id) {
	const snapshot = await Posts.where("postId", "==", id).get();
	let array = [];
	snapshot.forEach(async (x) => {
		array = [...array, x.data()];
	});
	return array[0];
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
};

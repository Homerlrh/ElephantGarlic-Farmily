import { firebase, db, auth } from "../firebase";
const allUser = db.collection("users");

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

async function getUseWithUID(uid) {
	return allUser
		.where("id", "==", uid)
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
	return allUser
		.where("email", "==", email)
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
	return allUser
		.where("userName", "==", username)
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

export {
	getUseWithUID,
	getUserWithEmail,
	getUserWithUsername,
	login,
	getCurrentUser,
};

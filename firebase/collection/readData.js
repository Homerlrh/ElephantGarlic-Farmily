import { firebase, db, auth } from "../firebase";

const allUser = db.collection("users");
const userGetter = allUser.get();

const getAllUser = () => {
	let allUser = [];
	userGetter.then((user) => {
		user.forEach((x) => console.log(x.Df.sn.proto.mapValue.fields));
	});
};

const onLoginPress = () => {
	auth
		.signInWithEmailAndPassword(email, password)
		.then((response) => {
			const uid = response.user.uid;
			const usersRef = db.collection("users");
			usersRef
				.doc(uid)
				.get()
				.then((userDocument) => {
					if (!userDocument.exists) {
						alert("User does not exist anymore.");
						return;
					}
					const user = userDocument.data();

					//wat u gonna do
					//navigation.navigate("Home", { user });
				})
				.catch((error) => {
					alert(error);
				});
		})
		.catch((error) => {
			alert(error);
		});
};

const signUP = () => {
	if (password !== confirmPassword) {
		alert("Passwords don't match.");
		return;
	}
	auth
		.createUserWithEmailAndPassword(email, password)
		.then((response) => {
			const uid = response.user.uid;
			const data = {
				id: uid,
				email,
				name,
			};
			const usersRef = db.collection("users");
			usersRef
				.doc(uid)
				.set(data)
				.then(() => {})
				.catch((error) => {
					alert(error);
				});
		})
		.catch((error) => {
			alert(error);
		});
};

export { getAllUser };

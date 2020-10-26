import { firebase, db } from "../firebase";

const allUser = db.collection("users");
const userGetter = allUser.get();

const getAllUser = () => {
	let allUser = [];
	userGetter.then((user) => {
		user.forEach((x) => console.log(x.Df.sn.proto.mapValue.fields));
	});
};

export { getAllUser };

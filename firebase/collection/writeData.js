import db from "../firebase";
const currentTime = require("firebase-admin").firestore.Timestamp;

const User = db.collection("users");
const Post = db.collection("post");

exports.createUset = (data, cb) => {
	const date = currentTime.now();
	data.createdTime = date;
	User.add(data).then(cb);
};

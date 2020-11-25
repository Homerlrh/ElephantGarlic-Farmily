import "react-native-get-random-values";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";

const uriToBlob = (uri) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onload = function () {
			// return the blob
			resolve(xhr.response);
		};
		xhr.onerror = function () {
			// something went wrong
			reject(new Error("uriToBlob failed"));
		};
		// this helps us get a blob
		xhr.responseType = "blob";
		xhr.open("GET", uri, true);
		xhr.send(null);
	});
};

export async function uploadFile(uri) {
	const file = await uriToBlob(uri);
	const name = uuidv4();
	return new Promise((res, rej) => {
		const storageRef = storage.ref();
		const childRef = storageRef.child(name);
		const uploadTask = childRef.put(file);

		uploadTask.on(
			"state_changed",
			function (snapshot) {},
			function (err) {
				console.log("failed to upload photo");
				console.log(err);
				rej(err);
			},
			function () {
				uploadTask.snapshot.ref.getDownloadURL().then((url) => {
					//console.log(`File available at ${url}`);
					res(url);
				});
			}
		);
	});
}

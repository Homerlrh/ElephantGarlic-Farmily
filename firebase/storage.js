import { firebase, storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";

export function uploadFile({ file, name }) {
	if (!name) {
		name = uuidv4();
	}

	return new Promise((res, rej) => {
		const storageRef = storage.ref();

		const childRef = storageRef.child(name);
		const uploadTask = childRef.put(file);

		uploadTask.on(
			"state_changed",
			function (snapshot) {},
			function (err) {
				console.log("failed to upload photo");
				rej(err);
			},
			function () {
				uploadTask.snapshot.ref.getDownloadURL().then((url) => {
					console.log(`File available at ${url}`);
					res(url);
				});
			}
		);
	});
}

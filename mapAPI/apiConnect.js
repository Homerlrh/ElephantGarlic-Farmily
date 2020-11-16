import axios from "axios";
// const axios = require("axios");

/**
 * get place by place name
 * @date 2020-11-11
 * @param {string} place
 * @param {string} apiKey
 * @returns {array of objects}
 */
function searchPlace(place, apiKey) {
	const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&key=${apiKey}`;
	return axios.get(url).then((data) => {
		return data.data.results;
	});
}

/**
 * get place near your current location
 * @date 2020-11-11
 * @param {any} type
 * @param {any} keyword
 * @param {string} lat
 * @param {string} lon
 * @param {string} apiKey
 * @returns {array of objects}
 */
function getPalaceAroundUser(type, keyword, lat, lon, radius, apiKey) {
	const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&type=${[
		type,
	]}&keyword=${keyword}&key=${apiKey}`;
	return axios.get(url).then((data) => {
		return data.data.results;
	});
}

export { searchPlace, getPalaceAroundUser };

// code example
// (async () => {
// 	const result = await searchPlace("slaughter+house", apiKey);
// 	console.log(result);
// 	const result = await getPalaceAroundUser(
// 		"food",
// 		"Slaughterhouse",
// 		49.235351,
// 		-123.04647,
// 		10000,
// 		apiKey
// 	);
// 	console.log(result);
// })();

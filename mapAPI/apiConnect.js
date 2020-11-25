import axios from "axios";
// const axios = require("axios");

const apiKey = "AIzaSyDq4MYWFy1QtDaJfebluPtvqdryS_ZTeE4";

/**
 * get place by place name
 * @date 2020-11-11
 * @param {string} place
 * @returns {array of objects}
 */
function searchPlace(place) {
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
 * @returns {array of objects}
 */
function getPalaceAroundUser(type, keyword, lat, lon, radius) {
	const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&type=${[
		type,
	]}&keyword=${keyword}&key=${apiKey}`;
	return axios.get(url).then((data) => {
		return data.data.results;
	});
}

function getPlacePhoto(photo) {
	const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo[0].photo_reference}&key=${apiKey}`;
	return axios.get(url).then((data) => {
		return data;
	});
}

export { searchPlace, getPalaceAroundUser, getPlacePhoto };

// // code example
// (async () => {
// 	// const result = await searchPlace("slaughter+house");
// 	// console.log(result);
// 	// const result = await getPalaceAroundUser(
// 	// 	"food",
// 	// 	"Slaughterhouse",
// 	// 	49.235351,
// 	// 	-123.04647,
// 	// 	10000,
// 	// 	apiKey
// 	// );
// 	// console.log(result);

// 	const res = getPlacePhoto(
// 		"ATtYBwKNYqR8NvBprR1tCaDxs3wVODzGyiHxEA1Bjfh94ahV90w2BLFMwnjsHewSAbwwOl_IEYuKR_-F7ypDhIpObULvc4Hi5F8-YF2t1t96aVxiWr53mS5Pde0HQa4WDLOD2qG4jg39gwObLwnbAwx3SybB_z4m67D80-6HxCmT6rqfJL7s"
// 	);
// 	console.log(res);
// })();

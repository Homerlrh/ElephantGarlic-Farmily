import * as firebase from "firebase";
const config = {
	type: "service_account",
	projectId: "farmily-1f4f1",
	private_key_id: "1dfd4365a151a622e7216427c3b726f5c610aa6d",
	private_key:
		"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+l8TWa8GP2rxz\n/Moj7JcMgPxTqS+W779yj4ZcskOl4hvw+goAqyzBdOl65zVW/YoQZwL24RpW4qCU\nRSSzYbstbr7SBZcQrWV45MEw4RsFrs1CHbbRsZF7CJ4i7sB5Ushj8RwMf5W5SKPZ\n2ok2MWmAQxzwfSROlzjNRZo9P3e5/avsMsYzy0VWQVKz/wFAOc9OXfbby7ZtWWxK\nfZg5hMKGHZQZecUUoksq5GBVjcugLzKqMtaKuJIN2CiyOy7HVC6rKwszRagXyl30\n2q+NbLaVgO9z1dxfZW6sU9keLWRtpe6OwQECNWvUWj5vKqK+d996q2SoXo90DY47\nX5ceDK+XAgMBAAECggEADNCakQo8wQXljuzr0H+LZnFTxfJFu2HSXwsMbzYjO0eZ\nNloxivr3buiD/FoIaZlxi4nJlrzq7vWc82s0vQTwt2zPUsLCdgIapQbIgJdaIEcx\nEOV7kdzdGccqDtI7ycyJocKn7qUzdXpPXgoGGMk4vUGF9BuN8eTUEmVAKicWz0AD\n3NbWObQisRtQuzgTK4XR9liXWCRKDsnRTtr2Rl6OOH3+hoHhkzLEcR4tVRIxXkt9\nY2pasxMRquDezi5jcN0e03dLEKorGhwNwN5f4+PeNR+Sv9IwwJ7yt1AIQ+/KBa8h\n6WZuUIuNE2hFCGhvhoUSfqQGubIGuaqqRs0KDrpeyQKBgQDwLd/VGiftDGbjB5MM\nt8rvcabPPh1JcgDNwSfgCajUUkChzFpgUK/KecohmK2EG/aFLwZ+x6tkn7KygiB/\nP9VIIaexgbMTn6CQXhMprB9M1aDNlzN+F2eD9PdUwP8LFHMtbRwqPnB+SvYFhI1T\n4mW4ikhSEFkNmqXuDirZip6rbwKBgQDLJbkobynX2my7ObGAp6GX16/htoJ26WbY\n4kOdcYvl5GARcMyLP9ic4AIUfNLkSgvnb/nDed0tFbFnfJOMGuklp0fFZ/OORBmp\nDRWeNPmETMVi731qOxyou6zUicus5Fu03wvFxeXGLddX0C7BVyQ/h8FBB1kNypFQ\nF93O33tKWQKBgChBCArHX3mzYmsakeLHyxNmkPabCn2MxeW2QeCivdEYGA0GGv+Z\nhl0BHIeU9z/1D9QylXwaKveqbGDOvnOVV0HHojt16XWYg2iu27dYScau50yN0uuH\nMKpFHE7wKc7JlqQ+bUIHRQNlvOYf2S/9+d58DrLyWnqVOMo1RalAOmexAoGASfNM\niNSWpdYEeM9St2POZkkE5KScr47depw7QugfpitRcWfffd1bDBhbiXu7BZGS7cgM\nYsVM52mbL/HggEMXljZj4Q+rUKGnuatisDnWjvunaxGFVRN5pk7TZndW5nQmkhwT\n3AXjVBZB6tyE+KqxLlNL3VFAcM3Jwh8+Bl3CMtkCgYBC2kjfkS/CxGxgK5fiODfp\n92VOgfeYAthNOwY8paE2rNCllhoT3+6cSH3O47NscKYiOFK1oHPCmDjns8ABKnEd\nZQrT6lxcsQdnZYX7QNeHd8Pu3qz4jODLWmJRPI455hqvl4r/IMmrCcnnAornE8eY\nWX91+lMn//YtG7peVtEJ1Q==\n-----END PRIVATE KEY-----\n",
	client_email: "firebase-adminsdk-iei3x@farmily-1f4f1.iam.gserviceaccount.com",
	client_id: "105457963886843684339",
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url:
		"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-iei3x%40farmily-1f4f1.iam.gserviceaccount.com",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const db = firebase.firestore();
const auth = firebase.auth();
export { firebase, db, auth };

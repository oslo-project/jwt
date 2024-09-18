import { expect, test } from "vitest";
import { decodeJWT, encodeJWT, parseJWT } from "./index.js";

test("parseJWT()", () => {
	expect(
		parseJWT(
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
		)
	).toStrictEqual([
		{
			alg: "HS256",
			typ: "JWT"
		},
		{
			sub: "1234567890",
			name: "John Doe",
			iat: 1516239022
		},
		new Uint8Array([
			73, 249, 74, 199, 4, 73, 72, 199, 138, 40, 93, 144, 79, 135, 240, 164, 199, 137, 127, 126, 143, 58, 78, 178, 37,
			95, 218, 117, 11, 44, 195, 151
		]),
		new Uint8Array([
			101, 121, 74, 104, 98, 71, 99, 105, 79, 105, 74, 73, 85, 122, 73, 49, 78, 105, 73, 115, 73, 110, 82, 53, 99, 67,
			73, 54, 73, 107, 112, 88, 86, 67, 74, 57, 46, 101, 121, 74, 122, 100, 87, 73, 105, 79, 105, 73, 120, 77, 106, 77,
			48, 78, 84, 89, 51, 79, 68, 107, 119, 73, 105, 119, 105, 98, 109, 70, 116, 90, 83, 73, 54, 73, 107, 112, 118, 97,
			71, 52, 103, 82, 71, 57, 108, 73, 105, 119, 105, 97, 87, 70, 48, 73, 106, 111, 120, 78, 84, 69, 50, 77, 106, 77,
			53, 77, 68, 73, 121, 102, 81
		])
	]);
});

test("decodeJWT()", () => {
	expect(
		decodeJWT(
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
		)
	).toStrictEqual({
		sub: "1234567890",
		name: "John Doe",
		iat: 1516239022
	});
});

test("encodeJWT()", () => {
	const headerJSON = '{"alg":"HS256","typ":"JWT"}';
	const payloadJSON = '{"sub":"1234567890","name":"John Doe","iat":1516239022}';
	expect(
		encodeJWT(
			headerJSON,
			payloadJSON,
			new Uint8Array([
				73, 249, 74, 199, 4, 73, 72, 199, 138, 40, 93, 144, 79, 135, 240, 164, 199, 137, 127, 126, 143, 58, 78, 178, 37,
				95, 218, 117, 11, 44, 195, 151
			])
		)
	).toBe(
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
	);
});

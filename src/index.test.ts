import { expect, test } from "vitest";
import { encodeJWT, parseJWT } from "./index.js";

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
		])
	]);
});

test("encodeJWT()", () => {
	expect(
		encodeJWT(
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
			])
		)
	).toBe(
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
	);
});

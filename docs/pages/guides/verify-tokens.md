---
title: "Verify tokens"
---

# Verify tokens

Use `parseJWT()` to get each of the individual parts of the token. Use `JWSRegisteredHeaders` and `JWTRegisteredClaims` to parse the header and payload claims.

```ts
import { parseJWT, JWSRegisteredHeaders, JWTRegisteredClaims } from "@oslojs/jwt";

const [header, payload, signature, signatureMessage] = parseJWT(jwt);
const headerParameters = new JWSRegisteredHeaders(header);
if (headerParameters.algorithm() !== joseAlgorithmHS256) {
	throw new Error("Unsupported algorithm");
}
const validSignature = await crypto.subtle.verify("HMAC", key, signature, signatureMessage);
if (!validSignature) {
	throw new Error("Invalid signature");
}
const claims = new JWTRegisteredClaims(payload);
if (claims.hasExpiration() && !claims.verifyExpiration()) {
	throw new Error("Expired token");
}
if (claims.hasNotBefore() && !claims.verifyNotBefore()) {
	throw new Error("Invalid token");
}
```

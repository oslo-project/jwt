---
title: "Create tokens"
---

# Create tokens

Use `encodeJWT()` to encode a header object, payload object, and a signature into a token.

```ts
import { joseAlgorithmHS256, createJWTSignatureMessage, encodeJWT } from "@oslojs/jwt";

const headerJSON = JSON.stringify({
	alg: joseAlgorithmHS256,
	typ: "JWT"
});
const payloadJSON = JSON.stringify({
	exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
	name: "John Doe"
});
const signatureBuffer = await crypto.subtle.sign("HMAC", key, createJWTSignatureMessage(headerJSON, payloadJSON));
const jwt = encodeJWT(headerJSON, payloadJSON, new Uint8Array(signatureBuffer));
```

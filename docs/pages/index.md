---
title: "@oslojs/jwt"
---

# @oslojs/jwt

A JavaScript library for parsing and encoding JSON web tokens (JWT) by [Oslo](https://oslojs.dev). Only signed tokens are supported.

- Runtime-agnostic
- No third-party dependencies
- Fully typed

```ts
import { parseJWT, JWSRegisteredHeaders, JWTRegisteredClaims, joseAlgorithmHS256 } from "@oslojs/jwt";

const [header, payload, signature] = parseJWT(jwt);
const headerParameters = new JWSRegisteredHeaders(header);
if (headerParameters.algorithm() !== joseAlgorithmHS256) {
	throw new Error("Unsupported algorithm");
}
const claims = new JWTRegisteredClaims(payload);
if (!claims.verifyExpiration()) {
	throw new Error("Expired token");
}
if (claims.hasNotBefore() && !claims.verifyNotBefore()) {
	throw new Error("Invalid token");
}
```

## Installation

```
npm i @oslojs/jwt
```

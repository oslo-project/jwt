---
title: "JWTRegisteredClaims"
---

# JWTRegisteredClaims

Represents registered JWT payload claims defined in [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519).

## Constructor

```ts
function constructor(payload: object): this;
```

### Parameters

- `payload`: JSON-decoded JWT payload object

## Methods

- [`JWTRegisteredClaims.audiences()`](/reference/main/JWTRegisteredClaims/audiences)
- [`JWTRegisteredClaims.expiration()`](/reference/main/JWTRegisteredClaims/expiration)
- [`JWTRegisteredClaims.hasAudiences()`](/reference/main/JWTRegisteredClaims/hasAudiences)
- [`JWTRegisteredClaims.hasExpiration()`](/reference/main/JWTRegisteredClaims/hasExpiration)
- [`JWTRegisteredClaims.hasIssuedAt()`](/reference/main/JWTRegisteredClaims/hasIssuedAt)
- [`JWTRegisteredClaims.hasIssuer()`](/reference/main/JWTRegisteredClaims/hasIssuer)
- [`JWTRegisteredClaims.hasJWTId()`](/reference/main/JWTRegisteredClaims/hasJWTId)
- [`JWTRegisteredClaims.hasNotBefore()`](/reference/main/JWTRegisteredClaims/hasNotBefore)
- [`JWTRegisteredClaims.hasSubject()`](/reference/main/JWTRegisteredClaims/hasSubject)
- [`JWTRegisteredClaims.issuedAt()`](/reference/main/JWTRegisteredClaims/issuedAt)
- [`JWTRegisteredClaims.issuer()`](/reference/main/JWTRegisteredClaims/issuer)
- [`JWTRegisteredClaims.jwtId()`](/reference/main/JWTRegisteredClaims/jwtId)
- [`JWTRegisteredClaims.notBefore()`](/reference/main/JWTRegisteredClaims/notBefore)
- [`JWTRegisteredClaims.subject()`](/reference/main/JWTRegisteredClaims/subject)
- [`JWTRegisteredClaims.verifyExpiration()`](/reference/main/JWTRegisteredClaims/verifyExpiration)
- [`JWTRegisteredClaims.verifyNotBefore()`](/reference/main/JWTRegisteredClaims/verifyNotBefore)

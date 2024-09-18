---
title: "decodeJWT()"
---

# decodeJWT()

Parses and returns the token's payload. This does not check if the header or signature is well-formed, nor verify the payload claims, such as expiration, or the signature.

## Definition

```ts
function encodeJWT(jwt: string): object;
```

### Parameters

- `jwt`

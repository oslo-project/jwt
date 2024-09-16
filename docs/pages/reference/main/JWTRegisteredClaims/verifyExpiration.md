---
title: "JWTRegisteredClaims.verifyExpiration()"
---

# JWTRegisteredClaims.verifyExpiration()

Return the `true` if the current time from `Date.now()` is before the expiration time. Throws an `Error` if the `exp` parameter doesn't exist or its value isn't a positive integer.

## Definition

```ts
function verifyExpiration(): boolean;
```

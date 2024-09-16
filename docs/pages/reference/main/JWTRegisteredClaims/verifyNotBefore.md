---
title: "JWTRegisteredClaims.verifyNotBefore()"
---

# JWTRegisteredClaims.verifyNotBefore()

Return the `true` if the current time from `Date.now()` is at or after the not-before time. Throws an `Error` if the `nbf` parameter doesn't exist or its value isn't a positive integer.

## Definition

```ts
function verifyNotBefore(): boolean;
```

---
title: "JWTRegisteredClaims.audiences()"
---

# JWTRegisteredClaims.audiences()

Return the `aud` parameter value. Throws an `Error` if the parameter doesn't exist or the value isn't an array of string. Can return an empty array.

## Definition

```ts
function audiences(): string[];
```

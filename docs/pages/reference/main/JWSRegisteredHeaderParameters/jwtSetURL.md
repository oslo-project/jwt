---
title: "JWSRegisteredHeaderParameters.jwkSetURL()"
---

# JWSRegisteredHeaderParameters.jwkSetURL()

Return the `jku` parameter value. Throws an `Error` if the parameter doesn't exist or the value isn't a string. This method does not validate whether the value is a well-formed URI.

## Definition

```ts
function jwkSetURL(): string;
```

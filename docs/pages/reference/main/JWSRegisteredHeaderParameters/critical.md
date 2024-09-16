---
title: "JWSRegisteredHeaderParameters.critical()"
---

# JWSRegisteredHeaderParameters.critical()

Return the `crit` parameter value. Throws an `Error` if the parameter doesn't exist, the value isn't an array of string, or the value is an empty array.

## Definition

```ts
function critical(): string[];
```

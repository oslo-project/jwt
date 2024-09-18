---
title: "JWSRegisteredHeaders.x509CertificateChain()"
---

# JWSRegisteredHeaders.x509CertificateChain()

Return the `x5c` parameter value as an array of byte arrays. Throws an `Error` if the parameter doesn't exist, the value isn't an array of base64 encoded strings, or the value is an empty array.

## Definition

```ts
function x509CertificateChain(): Uint8Array[];
```

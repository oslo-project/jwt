---
title: "JWSRegisteredHeaders.x509CertificateSHA1Thumbprint()"
---

# JWSRegisteredHeaders.x509CertificateSHA1Thumbprint()

Return the `x5t` parameter value as a byte array. Throws an `Error` if the parameter doesn't exist or the value isn't a base64url encoded string.

## Definition

```ts
function x509CertificateSHA1Thumbprint(): Uint8Array;
```

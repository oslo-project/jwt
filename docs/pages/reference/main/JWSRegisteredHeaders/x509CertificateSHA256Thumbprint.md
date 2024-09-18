---
title: "JWSRegisteredHeaders.x509CertificateSHA256Thumbprint()"
---

# JWSRegisteredHeaders.x509CertificateSHA256Thumbprint()

Return the `x5t#S256` parameter value as a byte array. Throws an `Error` if the parameter doesn't exist or the value isn't a base64url encoded string.

## Definition

```ts
function x509CertificateSHA256Thumbprint(): Uint8Array;
```

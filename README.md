# panda-confidential-kms
Extension to Panda-Confidential to leverage AWS KMS

We built [Panda-Confidential][confidential] to make TweetNaCl.js easier to use and extend without giving up auditability.  This library extends Confidential with the [AWS Key Management Service][kms], leveraging a source of robust randomness and allowing only indirect access to cryptographic keys.

[confidential]:https://github.com/pandastrike/panda-confidential
[kms]:https://aws.amazon.com/kms/

## Installation
```
npm install panda-confidential panda-confidential-kms --save
```

## Usage

```coffeescript
import {confidential} from "panda-confidential"
import KMS from "panda-confidential-kms"
{randomBytes, key, decrypt, encrypt, randomBytes, encode} = KMS confidential(), SDK
```

Panda-Confidential-KMS replaces the default TweetNaCl.js `randomBytes` interface with [`generateRandom`][kms-random], using KMS to generate a cryptographically secure random value.

[kms-random]:https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/KMS.html#generateRandom-property

Panda-Confidential-KMS also adds a new key type, KMSKeyID.  The `encrypt` function recognizes keys instantiated with `KMS` constructor.  KMS is limited to encrypting data 4kB or shorter.  So we use TweetNaCl.js to encrypt the data symmetrically (with a unique key for each operation) and then [lock the key with KMS.][kms-encrypt]

[kms-encrypt]:https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/KMS.html#encrypt-property

```coffeescript
do ->
  myKey = key.KMS "alias/myKey"

  # Person A symmetrically encrypts their data.
  message = "Hello World!"
  ciphertext = await encrypt myKey, message
```

`decrypt` performs the reverse operation, [unlocking the unique key with KMS][kms-decrypt] and then using TweetNaCl.js to recover the plaintext.

[kms-decrypt]:https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/KMS.html#decrypt-property  

```coffeescript
  # Later, Person A decrypts that ciphertext.
  output = await decrypt myKey, ciphertext
```

# 🔐 Fhenix Encryption UI

Fhenix encryption UI can be found in the following [link](https://encrypt.fhenix.zone/)
This UI is useful for those who are not using remix or using remix without using the [plugin](Fhenix-Remix-Plugin.md)

![](/img/encui.png)

#### Encryption

In order to encrypt a number you can simply write the number you want to encrypt instead of the "Enter a number" text.
You can choose what Euint\* type you want as an output and eventually you can choose one of the two options:

1. Encrypt (Plain) - Will output hex encoded bytes (`0x04000...`) that can be used as "bytes calldata" input or as the input for the remix plugin
2. Encrypt (InEuint) - Will output hex encoded bytes in square brackets (`[0x04000...]`) that can be used in remix (not with the plugin) for function that receive inEuint\*

All output will be copied to your clipboard and a notification will pop up telling you that the output was copied.

#### Unsealing

You can only unseal data that was sealed using your wallet public encryption key.
In order to get your wallets public encryption key you can click on "Get Public Key" that will use metamask in order to retrieve the key. The key will be shown as a notification on which you can click in order to copy the value to your clipboard.

Decryption can be done by simply pasting the encrypted value instead of the "Enter sealed value" text and clicking on the Unseal button which will use metamask to decrypt the value.

#### Permit Generation

This tool can also be used to generate a permit for a contract. Enter a contract address, and click generate permit.
The permit will be generated and copied to your clipboard. You can save the permit to fhenix.js, or use the signature field to interact with contracts using the [Permission structure](../Writing%20Smart%20Contracts/Permissions.md).

# 🎧 Fhenix Remix Plugin

Fhenix created a plugin to ease the interaction with the contracts. 

#### Adding the Plugin

In order to add the plugin you can simply click on the `Plugin Manager` button in remix (left bottom side), then click on the `Connect to a Local Plugin` link.
Set the `Plugin Name` value to be `Fhenix` and the `URL` value to be `https://remix.nitrogen.fhenix.zone`

![](/img/install-plugin.webp)

#### Key Features

* Interact with the contract - On contract interaction you should use the values that were encrypted by the plugin for encrypted inputs. For contracts that are returning an output of a sealOutput function, the plugin will already generate a public address and it will decrypt the output for you.
* Encrypt numbers
* Show permit information of a contract (to manually interact with it)
  

#### Using the Plugin

After deploying a contract (the plugin is only aware of contracts that are deployed while it is active), MetaMask will request that you sign a message. This message is a permit that allows you to interact with the contract from the plugin.  
After the message is signed, the contract will be saved to the list.  

![](/img/interact-info-1.webp)


1. Select the contract you wish to interact with.
2. Remove the selected contract from the list
3. Click to encrypt a number - If the field has a defined type (inEuint8, inEuint16, or inEuint32), it will automatically encrypt it correctly. If the field is of a generic bytes type, you will be prompted to select the required encryption.
4. Autofilled "permission" type - The field detects the unique type and fills it for you based on the created permit.
5. Autofilled "publicKey" - If a publicKey field is detected, it will be auto-filled with the public key from the permit.


#### Additional Tools

![](/img/tools-info.webp)

1. Switch to the Fhenix network or add it to MetaMask if it is not already present.
2. Select the desired encryption type.
3. Select the contract to display permit information.

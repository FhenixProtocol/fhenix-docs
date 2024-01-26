# 🎧 Fhenix Remix Plugin

Fhenix created a plugin to ease the interaction with the contracts. 

#### Adding the Plugin

In order to add the plugin you can simply click on the `Plugin Manager` button in remix then click on the `Connect to a Local Plugin` link.
Set the `Plugin Name` value to be `Fhenix` and the `URL` value to be `https://remix-4n1.pages.dev/`

#### Using the Plugin

After deploying the contract (The plugin is only aware of contracts that are deployed when it was present) you will have few options:
* Encrypting a number
* Manage the permit (Create / Delete / Choose)
* Interact with the contract - On contract interaction you should use the values that were encrypted by the plugin for encrypted inputs. For contracts that are returning an output of a sealOutput function, the plugin will already generate a public address and it will decrypt the output for you.

#### Known Issues
* Sometimes the plugin isn't using the correct permit - You should open the `Permit Management` tab and choose another permit and then rechoose the right permit
* Sometimes the "Encrypt" button remains unclickable - You can right click on the frame and choose `Reload frame`
* On contract interaction when the contract receives a public key the plugin generate public key which starts with `0x0x` - Remove one of them
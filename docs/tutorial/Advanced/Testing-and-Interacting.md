# Testing & Interacting

Now let's talk a little bit about testing for Fhenix FHE contracts. If you don't care about this and you just want to hack, we recommend at least skimming the Remix Section to understand how to use encryption/decryption APIs.

### Manual Testing (Remix)

Some developers prefer a more manual approach at first - where you just want to quickly verify that something works, play around with a small function or just verify functionality without writing tests or setting up a full developer environment. To do this, we'll show how you can manually test contracts with FHE-encrypted inputs and outputs without using fhevmjs as a helper library.

Conveniently, LocalFhenix comes with APIs that perform encryption or decryption for you.

The APIs are:

<table>
    <thead>
        <tr>
            <th width="138">Function</th>
            <th width="411.3333333333333">Endpoint</th>
            <th>Description</th>
            <th data-hidden>Method</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Encrypt</td>
            <td>encrypt?number=integer&int=32/16/8></td>
            <td>Encrypt a number. If int size is not provided defaults to 32.</td>
            <td>GET</td>
        </tr>
        <tr>
            <td>Decrypt</td>
            <td>decrypt?encrypted=hex string</td>
            <td>Decrypt a number.</td>
            <td>GET</td>
        </tr>
        <tr>
            <td>Decryption Public</td>
            <td>decryption_public</td>
            <td>Get the public key that the service uses to decrypt data.</td>
            <td></td>
        </tr>
        <tr>
            <td>Network Public Key</td>
            <td>public</td>
            <td>Get the public key of the network.</td>
            <td>GET</td>
        </tr>
    </tbody>
</table>

For example, if I wanted to encrypt the number 259 as a uint16, I would use:

```bash
curl "http://localhost:5000/encrypt?number=259&int=16"
```

To decrypt a number, we use a GET request, with the encrypted string (returned from a `TFHE.reencrypt` function), such as:

```bash
curl "http://localhost:5000/decrypt&encrypted=0x0dcc7d99ecbb6fc8b8657321b497b39b2bd6017dd4a159b1d1a801e58149422cb5aa4e2d73994bc15e1dc12604a0da1db0"
```

> **Note:** At the moment, to perform decryption you must provide the public key of the service for it to be able to decrypt data. That means you need to call the view function of the FHE-enabled contract with the key from the _**`decryption_public`**_ endpoint.


### Writing Unit Tests

As we mentioned in previous sections, Fhenix uses extensions to the standard EVM to enable FHE functionality. To write unit tests, we use LocalFhenix instead of hardhat network - this is similar to deploying & testing contracts on Ganache. To see an example of how to write unit tests & create CI workflows you can refer to our [reference wrapped ERC20 contract repo](https://github.com/FhenixProtocol/werc20-example).&#x20;

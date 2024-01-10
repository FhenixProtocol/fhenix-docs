---
description: How to set up a development environment for Fhenix
---

# Setting Up

### Prerequisites

In this guide we'll be using `git`, `make` and `docker, typescript` and `pnpm`.   Installing these is usually pretty straightforward, but here's some helpful instructions if you need them

#### Installing Prerequisites 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
<Tabs>
    <TabItem value="macos" label="MacOS">
```bash
# install git and make
brew install git make
# Installing node through Homebrew
brew install node
npm install -g pnpm
```
    </TabItem>
    <TabItem value="linux" label="Linux">
```bash
# update package list
sudo apt update

sudo apt install git make

curl -sL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo apt install nodejs

sudo npm install -g pnpm
```
    </TabItem>
</Tabs>



### Installation

#### Set up from Template Project

First, let's clone our template project. Go to our [hardhat template repo](https://github.com/FhenixProtocol/hardhat-template) and click "use this template". Choose your new project name and set up a repository.

Next, clone the repository or open a cloud-based workspace.

Now, we'll set up the .env file, that contains the mnemonics for the keys that we will use for testing and deployment.

```bash
cp .env.example .env
```

:::danger[Careful]
We provide example mnemonics that can be used for testing, but highly recommend changing them for usage outside LocalFhenix
:::

Lastly, we'll also want to install all the dependencies for the environment using

```bash
pnpm install
```

### LocalFhenix

For development we recommend using LocalFhenix as a testing tool (_pretty please hardhat network support one day_). LocalFhenix is a complete Fhenix devnet and ecosystem containerized with Docker. It is similar to Ganache, and we'll use it to test our code during development.

To start LocalFhenix, use the following command:

```bash
pnpm start:localfhenix
```

If you want to learn more about this tool, check out our [LocalFhenix Documentation](#localfhenix).

If you want more control over the docker image being executed, you can manually execute and customize the following command:

```bash
docker run -it -p 8545:8545 -p 6000:6000 -p 5000:5000 \
  --name localfhenix ghcr.io/fhenixprotocol/fhenix-devnet:0.1.6
```

### Alternative - Gitpod

If you're more of a cloud-based developer, you can skip all the installation steps and work directly with our Gitpod environment. This environment includes a LocalFhenix instance and all the tools you need to dive in.

You can run an instance of LocalFhenix in Gitpod by [clicking here](https://gitpod.io/#https://github.com/scrtlabs/GitpodLocalSecret), or by clicking the gitpod button in the repository you cloned previously.

The Gitpod environment comes with everything pre-installed and set up, so you can jump right in!

# NodeJS-ADS 

[![Build Status](https://travis-ci.com/pranavms13/NodeJS-ADS.svg?branch=master)](https://travis-ci.com/pranavms13/NodeJS-ADS) [![npm version](https://badge.fury.io/js/nodejs-ads.svg)](https://badge.fury.io/js/nodejs-ads)

Simple Module for Deploying updates from GitHub using NodeJS.

## What is this ??

This is a simple tool used to deploy your package **(GitHub Repo)** to a Server when a **PUSH** event has occurred on the Repository. The NodeJS Script runs on a Specfied port  and waits for the call. To call the script, we setup a WebHook on Github. Whenever a **PUSH** event occurs, GitHub POST's the details of the push to a given **Payload URL**. When the Script receives the payload, it verifies the authenticity of the payload. Once it is verified, the updates are pulled from GitHub repository and all the Node Modules are re-synced. Once the above operations are completed, the app which is running on **pm2** is restarted.

## Prerequisites

-   A Server with Static IP / Tunneling Service.
-	That Server running on Linux.

## Install
```
npm install nodejs-ads --save
```

## Usage

Example
```
var updater = require('nodejs-ads')
updater.start("YOUR_SECRET_KEY", PORT);
```
### GitHub Repo Configuration (Setting up Webhook and Secret)
- Navigate to Repository **Settings**.
- Select **Webhooks** and Click on **Add Webhook**.
- Enter the Payload URL as ``http://YOUR_IP_OR_DOMAIN:PORT/deployment/updatetheapp``
	- ``PORT`` is the port number used in the ``updater.start`` function.
	* Alternatively you can also use ``TUNNELING_URL/deployment/updatetheapp`` 
- Change **Content Type** to ``application/json``.
- Enter  ``YOUR_SECRET_KEY`` in the **Secret** Field.
	* ``YOUR_SECRET_KEY`` is the key used in the ``updater.start`` function.
- Select ``Just the push event`` under **Which events would you like to trigger this webhook?**
- Check the **Active** Box and click on **Add Webhook**.

### Working
![Working](https://gist.githubusercontent.com/pranavms13/7b3c0a242d6fea3234c9159c83b58f5b/raw/b24474f005fe0fec0fb656a7da641ee147c5c600/uml.svg?sanitize=true)

#### Donations to

-   UPI :  `pranavms13@apl`
-   XMR :  `84B2PEVJjenN31h8HcnY4uCFPVcicxvVCAJAYVeYnPLoHkaVGHHWpVxCm6Gn9beEir2CjffgEoXtiDjpAZCmy4ap6uUXT8Y`
-   BTC :  `3Jg45PbpUNtASL5uvQSeJKZyiExqbB9mbC`

#### Suggestions ?
[nodejs-ads@pranavms.ml](mailto:nodejs-ads@pranavms.ml)

## PR's are welcome.

# NodeJS-ADS 
Simple NodeJS Auto Deployment Tool.

## What is this ?

This is a simple tool used to deploy your package **(GitHub Repo)** to a Server.
The NodeJS Script Opens a path which when called, runs the [deploy.sh](https://github.com/pranavms13/NodeJS-ADS/blob/master/deploy.sh) file.
The [deploy.sh](https://github.com/pranavms13/NodeJS-ADS/blob/master/deploy.sh)  file, navigates to the repository folder and pulls the new changes.
It then re-sync's all the node modules to make sure of the newly added/removed or changed modules.
Then the pm2 process of the current running instance is restarted to update the changes.

## Prerequisites 
- A Server with Static IP / Tunneling Service.

## Changes to be made before setup
- Change the Repository Folder Names in [deploy.sh](https://github.com/pranavms13/NodeJS-ADS/blob/master/deploy.sh#L6) 
- Change the pm2 instance details [deploy.sh](https://github.com/pranavms13/NodeJS-ADS/blob/master/deploy.sh#L17-L18) 

## How to Connect GitHub Repo WebHook.

- Open your Repository on GitHub.
- Go to **Settings** tab.
- Select **WebHooks** in the Left-menu.
- Click on **Add WebHook** button.
- Continue by Authenticating.
- Set Payload URL to: ``http://<your-ip-address-or-domain>:1025/deployment/updatetheapp``
- Select ``Just the push event`` under **Which events would you like to trigger this webhook?** 
- And Click on **Add WebHook**

#### Donations to  
- ``pranavms13@apl``
- XMR : ``84B2PEVJjenN31h8HcnY4uCFPVcicxvVCAJAYVeYnPLoHkaVGHHWpVxCm6Gn9beEir2CjffgEoXtiDjpAZCmy4ap6uUXT8Y``
- BTC : ``3Jg45PbpUNtASL5uvQSeJKZyiExqbB9mbC``


## PR's are welcome
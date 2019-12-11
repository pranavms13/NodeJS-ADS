const express = require('express');
const app = express();
const shell = require('shelljs');
var payload = require('request-payload');
const crypto = require('crypto');

exports.start = function (secret,port){
    var hmac,hash;
    var opsys = process.platform;
    
    app.listen(port, () => {
        console.log('Update Port : ' + port);
    });

    app.post('/deployment/updatetheapp', (req, res) => {
        var rhash = req.headers['x-hub-signature'];
        if (process.platform == "linux") {
            payload(req, function(body) {
                hmac = crypto.createHmac('sha1',secret)
                hmac.update(body);
                hash = hmac.digest('hex');
                hash = 'sha1=' + hash;
                if(rhash==hash){
                    console.log("verified");
                    var cmd = "echo ========================================================;echo ------------------- Updater Script ---------------------;echo ---------------- Connecting to GitHub ------------------;git pull;echo -------------- Updating Node modules -------------------;npm update;npm install;echo ------------------Update completed----------------------;pm2 restart all;exit"
                    res.send({"message":"Update in progress"})
                    shell.exec(cmd)
                }
                else{
                    console.log("Not Verified");
                    res.send({"Error":"Invalid Hash !!. Update Not verified !"})
                }
            });
        }
        else{
            console.log(process.platform + " not supported !!")
            res.send({"Error":"NodeJS-ADS does not support " + process.platform});
        }
    });
}
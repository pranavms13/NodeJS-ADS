
const express = require('express');
const app = express();
const shell = require('shelljs');
//const crypto = require('crypto');

exports.start = function (){
    var hmac;
    app.listen(1025, () => { 
        console.log('Update Port : ' + 1025);
    });
    
    app.post('/deployment/updatetheapp', (req, res) => {
        var rhash = req.headers['X-Hub-Signature'];
        var body = req.body;
        hmac = crypto.createHmac('sha1','pranav')
        hmac.update(JSON.stringify(body)).digest('hex');
        if(rhash=='sha1='+hmac){
            console.log("verified");
        }
        else{
            console.log("Not Verified");
        }
        //var cmd = "echo ========================================================;echo ------------------- Updater Script ---------------------;echo ---------------- Connecting to GitHub ------------------;git pull;echo -------------- Updating Node modules -------------------;npm update;npm install;echo ------------------Update completed----------------------;exit"
        //shell.exec(cmd)
        res.send({"message":"Update in progress"})
    });
}
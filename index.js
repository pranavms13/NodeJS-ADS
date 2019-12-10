
const express = require('express');
const app = express();
const shell = require('shelljs');

exports.start = function (){
    app.listen(1025, () => { 
        console.log('Update Port : ' + 1025);
    });
    
    app.post('/deployment/updatetheapp', (req, res) => {
        var cmd = "echo ========================================================;echo ------------------- Updater Script ---------------------;echo ---------------- Connecting to GitHub ------------------;git pull;echo -------------- Updating Node modules -------------------;npm update;echo ------------------Update completed----------------------;exit"
        shell.exec(cmd)
        res.send({"message":"Update in progress"})
    });
}
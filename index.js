
const express = require('express');
const app = express();
const shell = require('shelljs');

exports.start = function (){
    app.listen(1025, () => { 
        console.log('Update Port : ' + 1025);
    });
    
    app.post('/deployment/updatetheapp', (req, res) => {
        shell.exec('./deploy.sh')
        res.send({"message":"Update in progress"})
    });
}
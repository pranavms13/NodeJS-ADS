#! /bin/bash
echo ========================================================
echo ------------------- Updater Script ---------------------
echo ---------------- Connecting to GitHub ------------------

cd ~/<GIT REPO FOLDER>

git pull

echo ------------ Removing old Node Modules -----------------
rm -rf node_modules

echo ----------- Installing new Node modules ----------------
npm install

echo --------------------Updating APIs-----------------------
pm2 stop <INSTANCE NAME>
pm2 start <INSTANCE NAME>
pm2 save

echo ------------------Update completed----------------------
exit
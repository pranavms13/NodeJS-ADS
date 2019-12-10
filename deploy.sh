#! /bin/bash
echo ========================================================
echo ------------------- Updater Script ---------------------
echo ---------------- Connecting to GitHub ------------------


git pull

echo ------------ Removing old Node Modules -----------------
rm -rf node_modules

echo ----------- Installing new Node modules ----------------
npm install

echo --------------------Updating APIs-----------------------
echo ------------------Update completed----------------------
exit
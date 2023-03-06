#!/bin/bash

#download node and npm
sudo apt install nodejs
sudo apt install npm
nvm install node

sudo npm install yarn -g
#create our working directory if it doesnt exist
DIR="/home/ec2-user/StudySesh-Backend"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}

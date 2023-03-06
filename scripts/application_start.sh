#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/StudySesh-Backend

#navigate into our working directory where we have all our github files
cd /home/ec2-user/StudySesh-Backend

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)
sudo npm install yarn -g
#install node modules
yarn

#start our node app in the background
 yarn start:dev > app.out.log 2> app.err.log < /dev/null & 
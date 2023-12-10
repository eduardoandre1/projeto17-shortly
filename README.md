# short Urls 
##
# descrition
with this api you can create and manage your onw and urls and make easy to share 
##
# link to deploy : https://sorter-urls.onrender.com
##
# to install
1º install dependecies 
npm install or yarn install

2º in postgres copy the code in file `dump.sql`

3º create a file named `.env` , with the code 
`DATABASE_URL= 'postgres://YOUR_USER:YOUR_PASSWORD@localhost:5432/DATABASE_NAME'`
##
# to start 
in terminal `npm run start`
if evething works will shol in terminal:
####
projeto17-shortly@1.0.0 start 
npx nodemon ./src/app.js
[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs` 
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./src/app.js`
api is working`  

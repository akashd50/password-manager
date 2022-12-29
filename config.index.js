require('dotenv').config({path: __dirname + '/.env'});
const fs = require("fs");
const { name, version } = require("./package.json");

const targetPath = './src/environments/environment.prod.ts';
const envConfigFile = `export const environment = {
    production: true,
    firebaseOptions: ${process.env["FIREBASE_OPTIONS"]},
    name: '${name}',
    version: '${version}'
};
`;
fs.writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    }
});

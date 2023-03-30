set -e
npm run docs:build
node plugins/genSitemapXML.js  
npm run docs:deploy

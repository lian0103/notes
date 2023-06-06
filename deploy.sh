set -e
npm run docs:build
node plugins/genSitemapXML.js
node plugins/genAdsTxt.js    
npm run docs:deploy

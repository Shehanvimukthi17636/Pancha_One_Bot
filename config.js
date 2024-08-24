const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "i7oQCbjB#nb0e043Hm_a62iWsSxMR8PaZhvz3-9RMqhMPxSMB-yc",
MONGODB: process.env.MONGODB || "mongodb://mongo:KnXBSLreTkmCiidSEDEYtonghbBqmHUI@autorack.proxy.rlwy.net:24929",
};

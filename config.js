const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "මෙතනට SESSION_ID එක දෙන්න",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/3cef367ebfc7a45c10595.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🚀 Hi SADIYA-MD Is Online Now 🕹\n*🚯 Owner* - Sadiya Ofc\n\n*🚯 Owner Number* -94742195461\n\n*🚯 Whatsapp Channel* - https://whatsapp.com/channel/0029VagR9a11iUxd0hUsD501\n\n_විධාන මෙනුව ලබා ගැනීමට .menu ලෙස ටයිප් කරන්න._",
SUDO_NB: process.env.SUDO_NB || "94742195461", // ඔයාගෙ owner number එක දෙන්න
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // true හො false දෙන්න
MODE: process.env.MODE || "public", //group,inbox,public,private ඔන එකක් දෙන්න
};

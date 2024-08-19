const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "මෙතනට SESSION_ID එක දෙන්න",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/385059cf39430775732c3.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🚀 Hi Pancha_One_Bot Is Online Now 🕹\n*🚯 Owner* - Real@Pancha\n\n*🚯 Owner Number* -94701391585\n\n*🚯 Whatsapp group* - https://chat.whatsapp.com/Ct5HiBUrMNr3oIwmxEBgn4\n\n_ප්‍රධාන මෙනුව ලබා ගැනීමට .menu ලෙස ටයිප් කරන්න._",
SUDO_NB: process.env.SUDO_NB || "94742195461", 
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
MODE: process.env.MODE || "public", 
};

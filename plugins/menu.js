const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let dec = `*🌐 SADIYA-MD විධාන මෙනුවයි.*

▁▁▁MAIN COMMANDS▁▁▁

*🕹️ Command - .alive*
*🚀 බොට් ඔන්ලයින්ද බැලීම*

*🕹️ Command - .menu*
*🚀 බොට්ගෙ විධාන මෙනුව ලබාගැනීම*

*🕹️ Command - .song*
*🚀 සිංදු බාගත කිරීම*

*🕹️ Command - .video*
*🚀 වීඩියෝ බාගත කිරීම*

*🕹️ Command - .video*
*🚀 වීඩියෝ බාගත කිරීම*

*🕹️ Command - .ai*

*🚀 AI විධානයකි*


▁▁▁OWNER COMMANDS▁▁▁

*🕹️ Command - .restart*
*🚀 Bot restart කරිමට*

▁▁▁▁SADIYA MD▁▁▁▁
`
    
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/3cef367ebfc7a45c10595.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

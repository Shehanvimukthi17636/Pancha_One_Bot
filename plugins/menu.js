const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let dec = `*🤖 ៚⎈ᴘᴀͬɴͤᴄͣʜᷞᴀོᴼᴺᴱོʙᴏᴛ☬𝜈𝛊𝜌࿐ 🤖*

•••••••MAIN COMMAND•••••••

*💫 Command - .alive*
*🤖 බොට් ඔන්ලයින්ද බැලීම*

*💫 Command - .menu*
*🤖 බොට්ගෙ විධාන මෙනුව ලබාගැනීම*

*💫 Command - .song*
*🤖 සිංදු බාගත කිරීම*

*💫 Command - .video*
*🤖 වීඩියෝ බාගත කිරීම*

*💫 Command - .ai*
*🤖 AI විධානයකි*


•••••••OWNER COMMAND•••••••

*🫅 Command - .restart*
*🫅 Bot restart කරිමට*

•••••••៚⎈ᴘᴀͬɴͤᴄͣʜᷞᴀོᴼᴺᴱོʙᴏᴛ☬𝜈𝛊𝜌࿐•••••••
`
    
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/385059cf39430775732c3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

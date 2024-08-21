const { cmd, commands } = require('../command');
const ytdl = require('ytdl-core');
const yts = require('yt-search');
const fs = require('fs');

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("*වීඩියෝවේ Link එකක් හො නමක් ලබා දෙන්න.*");
        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let des = `*⭐ ៚⎈ᴘᴀͬɴͤᴄͣʜᷞᴀོᴼᴺᴱོʙᴏᴛ☬𝜈𝛊𝜌࿐ VIDEO DOWNLOADER 🤖*

🪐 TITLE - ${data.title}

🪐 VIEWS - ${data.views}

🪐 DESCRIPTION - ${data.description}

🪐 TIME - ${data.timestamp}

🪐 AGO - ${data.ago}

MADE BY ៚⎈ᴘᴀͬɴͤᴄͣʜᷞᴀོᴼᴺᴱོʙᴏᴛ☬𝜈𝛊𝜌࿐
        `;
        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: des }, { quoted: mek });

        // download video
        const videoStream = ytdl(url, { quality: 'highestvideo' });
        const filePath = `${data.title}.mp4`;

        // Write the video to a file
        const writeStream = fs.createWriteStream(filePath);
        videoStream.pipe(writeStream);

        // Wait for the download to complete
        await new Promise((resolve, reject) => {
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });

        // Send video
        await conn.sendMessage(from, { video: { url: filePath }, mimetype: "video/mp4" }, { quoted: mek });
        await conn.sendMessage(from, { document: { url: filePath }, mimetype: "video/mp4", fileName: data.title + ".mp4", caption: "MADE BY ៚⎈ᴘᴀͬɴͤᴄͣʜᷞᴀོᴼᴺᴱོʙᴏᴛ☬𝜈𝛊𝜌࿐" }, { quoted: mek });

        // Clean up the downloaded file
        fs.unlinkSync(filePath);
    } catch (a) {
        reply(`${a}`);
    }
});

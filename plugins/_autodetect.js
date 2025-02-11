let WAMessageStubType = (await import('@whiskeysockets/baileys')).default

export async function before(m, { conn, participants, groupMetadata }) {
if (!m.messageStubType || !m.isGroup) return
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
let chat = global.db.data.chats[m.chat]
let usuario = `@${m.sender.split`@`[0]}`
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://files.catbox.moe/xr2m6u.jpg'  

let nombre, foto, edit, newlink, status, admingp, noadmingp
nombre = `*${usuario}*\n🌷↛ 𝐻𝑎𝑠 𝑐𝑎𝑚𝑏𝑖𝑎𝑑𝑜 𝑒𝑙 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜_°.\n\n⚡↛ 𝐴ℎ𝑜𝑟𝑎 𝑒𝑙 𝑔𝑟𝑢𝑝𝑜 𝑡𝑖𝑒𝑛𝑒 𝑒𝑙 𝑛𝑜𝑚𝑏𝑟𝑒_°↛:\n*<${m.messageStubParameters[0]}>*...`
foto = `*${usuario}*\n🍡↛ 𝐻𝑎𝑠 𝑐𝑎𝑚𝑏𝑖𝑎𝑑𝑜 𝑙𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜 𝑎_° :`
edit = `*${usuario}*\n🍨↛ 𝐴ℎ𝑜𝑟𝑎 𝑠𝑜𝑙𝑜 ℎ𝑎𝑠 𝑝𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜 𝑞𝑢𝑒_° ${m.messageStubParameters[0] == 'on' ? '𝑆𝑜𝑙𝑎𝑚𝑒𝑛𝑡𝑒 𝑙𝑜𝑠 𝑎𝑑𝑚𝑖𝑛𝑠' : '𝑇𝑜𝑑𝑜𝑠 𝑒𝑛 𝑔𝑒𝑛𝑒𝑟𝑎𝑙'} 𝑃𝑢𝑒𝑑𝑎𝑛 𝑐𝑜𝑛𝑓𝑖𝑔𝑢𝑟𝑎𝑟 𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜_°...`
newlink = `🍡 El enlace del grupo ha sido restablecido por:\n*» ${usuario}*...`
status = `🌷↛ 𝐸𝑙 𝑔𝑟𝑢𝑝𝑜 𝑒𝑠𝑡𝑎 𝑡𝑜𝑡𝑎𝑙𝑚𝑒𝑛𝑡𝑒↛ ${m.messageStubParameters[0] == 'on' ? '*𝐶𝑒𝑟𝑟𝑎𝑑𝑜 🔏*' : '*abierto 🔓*'} Por *${usuario}*\n\n💐 Ahora ${m.messageStubParameters[0] == 'on' ? '*solo admins*' : '*todos*'} pueden enviar mensaje...`
admingp = `*@${m.messageStubParameters[0].split`@`[0]}* Ahora es admin del grupo 🍡\n\n🍨 Acción hecha por:\n*» ${usuario}*...`
noadmingp =  `*@${m.messageStubParameters[0].split`@`[0]}* Deja de ser admin del grupo 💐\n\n🍨 Acción hecha por:\n*» ${usuario}*...`

if (chat.detect && m.messageStubType == 21) {
await conn.sendMessage(m.chat, { text: nombre, mentions: [m.sender] }, { quoted: fkontak })   

} else if (chat.detect && m.messageStubType == 22) {
await conn.sendMessage(m.chat, { image: { url: pp }, caption: foto, mentions: [m.sender] }, { quoted: fkontak })

} else if (chat.detect && m.messageStubType == 23) {
await conn.sendMessage(m.chat, { text: newlink, mentions: [m.sender] }, { quoted: fkontak })    

} else if (chat.detect && m.messageStubType == 25) {
await conn.sendMessage(m.chat, { text: edit, mentions: [m.sender] }, { quoted: fkontak })  

} else if (chat.detect && m.messageStubType == 26) {
await conn.sendMessage(m.chat, { text: status, mentions: [m.sender] }, { quoted: fkontak })  

} else if (chat.detect && m.messageStubType == 29) {
await conn.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  

return;
} if (chat.detect && m.messageStubType == 30) {
await conn.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  

} else {
//console.log({ messageStubType: m.messageStubType,
//messageStubParameters: m.messageStubParameters,
//type: WAMessageStubType[m.messageStubType], 
//})
}}

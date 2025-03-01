// Créditos a https://github.com/deylinqff

import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    await conn.sendMessage(m.chat, { 
      text: '*🌺 𝑭𝒂𝒍𝒕𝒂 𝒆𝒍 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒄𝒓𝒆𝒂𝒓 𝒍𝒂 𝒊𝒎𝒂𝒈𝒆𝒏✎*' 
    }, { quoted: m });
    return;
  }

  m.react('✨');
  await conn.sendMessage(m.chat, { 
    text: `*🌹 𝒄𝒓𝒆𝒂𝒏𝒅𝒐 𝒊𝒎𝒂𝒈𝒆𝒏 𝒅𝒆 ✎ ${text}*` 
  }, { quoted: m });

  try {
    const res = await fetch(`https://eliasar-yt-api.vercel.app/api/ai/text2img?prompt=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error();

    const buffer = await res.buffer();
    m.react('🪄');

    // 1️⃣ Enviar la imagen primero
    await conn.sendMessage(m.chat, { 
      image: buffer, 
      caption: '🌟 *Imagen generada con éxito.*\nSelecciona una opción a continuación:'
    }, { quoted: m });

    // 2️⃣ Enviar el botón con el menú separado
    await conn.sendMessage(m.chat, { 
      text: '📌 *Menú de Opciones* \nSelecciona una categoría:',
      footer: '📍 Kirito-Bot',
      templateButtons: [
        { index: 1, quickReplyButton: { displayText: '📷 Nueva Imagen', id: '.imgg nueva' } },
        { index: 2, quickReplyButton: { displayText: '🐱 Ver Gato', id: '.imgg gato' } },
        { index: 3, quickReplyButton: { displayText: '🐶 Ver Perro', id: '.imgg perro' } },
        { index: 4, quickReplyButton: { displayText: '📤 Compartir Imagen', id: '.compartir' } },
      ],
    }, { quoted: m });

  } catch (e) {
    await conn.sendMessage(m.chat, { text: '*🚨 Ha ocurrido un error 😔*' }, { quoted: m });
  }
};

handler.tags = ['tools'];
handler.help = ['genearimg'];
handler.command = ['iaimg', 'img', 'imgia'];

export default handler;
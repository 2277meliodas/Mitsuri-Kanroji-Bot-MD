// créditos a https://github.com/deylinqff
import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    await conn.sendMessage(m.chat, { text: '*👑 Falta texto para generar imagen*' }, { quoted: m });
    return;
  }

  m.react('✨');
  await conn.sendMessage(m.chat, { text: '*👑 Generando imagen...*' }, { quoted: m });

  try {
    const res = await fetch(`https://eliasar-yt-api.vercel.app/api/ai/text2img?prompt=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error();

    const buffer = await res.buffer();
    m.react('🪄');
    await conn.sendMessage(m.chat, { image: buffer }, { quoted: m });
  } catch (e) {
    await conn.sendMessage(m.chat, { text: '*🚨 Ha ocurrido un error 😔*' }, { quoted: m });
  }
};

handler.tags = ['tools'];
handler.help = ['genearimg'];
handler.command = ['imgIA', 'imgia', 'Imgia'];

export default handler;
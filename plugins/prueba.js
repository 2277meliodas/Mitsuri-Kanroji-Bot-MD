// Créditos a https://github.com/deylinqff

const handler = async (m, { conn }) => {
  const menuText = `🌟 *Menú Secundario* 🌟

🔹 Opciones disponibles:
1️⃣ *Comandos útiles*
2️⃣ *Información del bot*
3️⃣ *Soporte y contacto*

Presiona un botón para continuar.`;

  const buttons = [
    { buttonId: '.menuprincipal', buttonText: { displayText: '📜 Menú Principal' }, type: 1 },
    { buttonId: '.comandos', buttonText: { displayText: '📌 Ver Comandos' }, type: 1 },
    { buttonId: '.soporte', buttonText: { displayText: '🛠️ Soporte' }, type: 1 }
  ];

  await conn.sendMessage(m.chat, {
    text: menuText,
    footer: '📍 Kirito-Bot',
    templateButtons: buttons
  }, { quoted: m });
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['me', 'menú', 'help', 'ayuda'];

export default handler;
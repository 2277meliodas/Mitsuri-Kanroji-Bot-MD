let linkRegex = /https:\/\/chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/i;

let handler = async (m, { conn, text, isOwner }) => {
    if (!text) return m.reply('↛ 𝐷𝑒𝑏𝑒𝑠 𝑚𝑎𝑛𝑑𝑎𝑟𝑚𝑒 𝑢𝑛𝑎 𝑖𝑛𝑣𝑖𝑡𝑎𝑐𝑖𝑜𝑛 𝑝𝑎𝑟𝑎 𝑞𝑢𝑒 𝑙𝑎 𝑏𝑜𝑡 *🌷-𝑀𝑖𝑡𝑠𝑢𝑟𝑖~𝑏𝑜𝑡-🌷* 𝑒𝑛𝑡𝑟𝑒 𝑎𝑙 𝑔𝑟𝑢𝑝𝑜_°');

    let [_, code] = text.match(linkRegex) || [];

    if (!code) return m.reply('🍡↛ 𝐸𝑛𝑙𝑎𝑐𝑒 𝑑𝑒 𝑠𝑜𝑙𝑖𝑐𝑖𝑡𝑢𝑑 𝑛𝑜 𝑣𝑎𝑙𝑖𝑑𝑜_°');

    if (isOwner) {
        await conn.groupAcceptInvite(code)
            .then(res => m.reply(`🌷↛ *𝑀𝑖𝑡𝑠𝑢𝑟𝑖~𝑏𝑜𝑡* 𝑆𝑒 𝑢𝑛𝑖𝑜 𝑒𝑥𝑢𝑡𝑜𝑠𝑎𝑚𝑒𝑛𝑡𝑒 𝑎𝑙 𝑔𝑟𝑢𝑝𝑜_°`))
            .catch(err => m.reply(`✖️↛ 𝐸𝑟𝑟𝑜𝑟 𝑎𝑙 𝑢𝑛𝑖𝑟𝑚𝑒 𝑑𝑒𝑙 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜_°`));
    } else {
        let message = `🌷↛ 𝑆𝑜𝑙𝑖𝑐𝑖𝑡𝑢𝑑 𝑑𝑒 𝑖𝑛𝑣𝑖𝑡𝑎𝑐𝑖𝑜𝑛 𝑎𝑙 𝑔𝑟𝑢𝑝𝑖:\n${text}\n\n 𝑃𝑟𝑜𝑝𝑢𝑒𝑠𝑡𝑎 ℎ𝑒𝑐ℎ𝑎 𝑝𝑜𝑟: @${m.sender.split('@')[0]}`;
        await conn.sendMessage('573004828388' + '@s.whatsapp.net', { text: message, mentions: [m.sender] }, { quoted: m });
        m.reply(`🌷↛ 𝑇𝑢 𝑠𝑜𝑙𝑖𝑐𝑖𝑡𝑢𝑑 𝑑𝑒 𝑒𝑛𝑡𝑟𝑎𝑟 𝑎𝑙 𝑔𝑟𝑢𝑝𝑜, 𝑎 𝑠𝑖𝑑𝑜 𝑒𝑛𝑣𝑖𝑎𝑑𝑜 𝑒𝑥𝑖𝑡𝑜𝑠𝑎𝑚𝑒𝑛𝑡𝑒, 𝑀𝑢𝑐ℎ𝑎𝑠 𝑔𝑟𝑎𝑐𝑖𝑎𝑠 𝑝𝑜𝑟 𝑡𝑢 𝑠𝑜𝑙𝑖𝑐𝑖𝑡𝑢𝑑 *｡:.ﾟヽ(｡◕‿◕｡)ﾉﾟ.:｡+ﾟ*`);
    }
};

handler.help = ['invite'];
handler.tags = ['owner', 'tools'];
handler.command = ['invite', 'join'];

export default handler;

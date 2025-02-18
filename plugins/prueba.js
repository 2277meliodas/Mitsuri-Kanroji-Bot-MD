import PhoneNumber from 'awesome-phonenumber';

async function handler(m, { conn }) { 
    let numcreador = '+58412-0515006';
    let ownerJid = numcreador + '@s.whatsapp.net';

    let name = await conn.getName(ownerJid) || 'Deylin'; 
    let about = (await conn.fetchStatus(ownerJid).catch(() => {}))?.status || 'Sin descripción';

    let empresa = 'Deylin - Servicios Tecnológicos';

    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
ORG:${empresa};
TITLE:CEO & Fundador
TEL;waid=${numcreador}:${new PhoneNumber('+' + numcreador).getNumber('international')}
EMAIL:correo@empresa.com
URL:https://www.tuempresa.com
NOTE:${about}
ADR:;;Dirección de tu empresa;;;;
X-ABADR:ES
X-ABLabel:Dirección Web
X-ABLabel:Correo Electrónico
X-ABLabel:Teléfono de contacto
X-WA-BIZ-NAME:${name}
X-WA-BIZ-DESCRIPTION:${about}
END:VCARD`.trim();

    await conn.sendMessage(m.chat, { 
        contacts: { 
            displayName: name, 
            contacts: [{ vcard }]
        } 
    }, { quoted: m });
}

handler.help = ['owner']; 
handler.tags = ['main']; 
handler.command = ['owner', 'creator', 'creador2', 'dueño'];

export default handler;
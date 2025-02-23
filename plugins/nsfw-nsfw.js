import fetch from 'node-fetch';
import axios from 'axios';

// تعريف gurubot كمسار أو كائن
const gurubot = 'https://example.com'; // استبدل هذا بالمسار الصحيح أو الكائن المناسب

let handler = async (m, { conn, usedPrefix, command }) => {
  if (!global.db.data.chats[m.chat].nsfw)
    throw `🚫 group doesn't support nsfw \n\n enable it by \n*${usedPrefix}enable* nsfw`;
  
  let user = global.db.data.users[m.sender].age;
  if (user < 18) throw m.reply(`❎ you need to be at least 18 years old`);

  m.react(rwait);
  let type = command.toLowerCase();

  switch (type) {
    case 'ass':
    case 'gand':
      let as = await conn.getFile(`${gurubot}/rnsfw/gand`);
      conn.sendFile(m.chat, as.data, 'img.jpg', `✅ Random ${command}`, m);
      m.react(xmoji);
      break;

    case 'boobs':
    case 'boobies':
      let xb = await conn.getFile(`${gurubot}/rnsfw/tits`);
      conn.sendFile(m.chat, xb.data, 'img.jpg', `✅ Random ${command}`, m);
      m.react(xmoji);
      break;

    case 'pussy':
    case 'chut':
      let xp = await conn.getFile(`${gurubot}/rnsfw/porn`);
      conn.sendFile(m.chat, xp.data, 'img.jpg', `✅ Random ${command}`, m);
      m.react(xmoji);
      break;

    case 'lesbians':
    case 'lesbian':
      let les = await conn.getFile(`${gurubot}/rnsfw/imglesbian`);
      conn.sendFile(m.chat, les.data, 'img.jpg', `✅ Random ${command}`, m);
      m.react(xmoji);
      break;

    case 'pack':
    case 'cosplay':
      let img = await conn.getFile(`${gurubot}/rnsfw/packgirl`);
      conn.sendFile(m.chat, img.data, 'img.jpg', `✅ Result 🤭`, m);
      m.react(xmoji);
      break;

    default:
      m.reply(`❌ Unknown command: ${command}`);
  }
};

handler.help = ['ass', 'boobs', 'lesbian', 'pussy', 'pack'];
handler.tags = ['nsfw'];
handler.command = /^(ass|gand|boobs|boobies|lesbian|lesbians|pussy|chut|cosplay|pack)$/i;
handler.diamond = true;
handler.register = true;
handler.group = true;

export default handler;

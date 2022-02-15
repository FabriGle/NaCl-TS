// Asdfgh, nose
import { Client, Collection, Intents } from 'discord.js';
import config from './config';

var bot:any = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

bot.on('messageCreate', async (msg:any) => {
  if (msg.author.bot) return;
  if (!msg.guild) return;

  var prefix = 'h.';
  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  
  var args = msg.content.slice(prefix.length).trim().split(/ +/g);
  var cmd = args.shift().toLowerCase();

  // Solo es una prueba, no hare el cmd handler
  switch (cmd) {
    case 'hola':
      msg.reply('Hola '+msg.author.tag)
      break;
    case 'adios':
      msg.reply('Adios '+msg.author.tag)
    default:
      break;
  }
});

bot.on('ready', () => console.log(bot.user.tag+' Esta Listo ugu'));

bot.login(config.token); //El config esta en donde hosteo esto, solo hago un git pull y ya

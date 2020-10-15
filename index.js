const config = require('./config.json');
const Discord = require('discord.js');
const spook = new Discord.Client({
	messageCacheMaxSize: 20,
	messageCacheLifetime: 10,
	messageSweepInterval: 60,
	disabledEvents: [
		'GUILD_UPDATE',
		'GUILD_MEMBER_ADD',
		'GUILD_MEMBER_REMOVE',
		'GUILD_MEMBER_UPDATE',
		'GUILD_MEMBERS_CHUNK',
		'GUILD_ROLE_CREATE',
		'GUILD_ROLE_DELETE',
		'GUILD_ROLE_UPDATE',
		'GUILD_BAN_ADD',
		'GUILD_BAN_REMOVE',
		'CHANNEL_UPDATE',
		'CHANNEL_PINS_UPDATE',
		'MESSAGE_DELETE',
		'MESSAGE_UPDATE',
		'MESSAGE_DELETE_BULK',
		'MESSAGE_REACTION_ADD',
		'MESSAGE_REACTION_REMOVE',
		'MESSAGE_REACTION_REMOVE_ALL',
		'USER_UPDATE',
		'USER_NOTE_UPDATE',
		'USER_SETTINGS_UPDATE',
		'PRESENCE_UPDATE',
		'VOICE_STATE_UPDATE',
		'TYPING_START',
		'VOICE_SERVER_UPDATE',
		'RELATIONSHIP_ADD',
		'RELATIONSHIP_REMOVE',
	],
});

spook.on('ready', () => {
	const mode = config.monster ? 'Active' : 'Deactive';
	console.log(`Sp00kbot ready. [Monster mode: ${mode}]`);
});

spook.on('message', async (msg) => {
	if (msg.author.id !== '755580145078632508') return;
	if (msg.guild.id !== config.sp00kguild) return;

	if (msg.embeds[0].description.includes('h!trick')) {
		const MonsterName = msg.embeds[0].image.url.slice(41, -4);
		console.log(`${MonsterName} Spawn...`);
		switch (config.monster) {
			case true:
				msg.channel.send('h!treat');
				const checkmessage1 = await msg.channel.fetchMessage(msg.id);
				if (
					checkmessage1.embeds[0].description.includes(`<@${spook.user.id}>`)
				) {
					console.log(`Success spooking ${MonsterName}`);
				} else console.log(`Failed spooking ${MonsterName}`);
				break;

			case false:
				msg.channel.send('h!trick');
				const checkmessage2 = await msg.channel.fetchMessage(msg.id);
				if (
					checkmessage2.embeds[0].description.includes(`<@${spook.user.id}>`)
				) {
					console.log(`Success spooking ${MonsterName}`);
				} else console.log(`Failed spooking ${MonsterName}`);
				break;
		}
		return;
	}
	if (msg.embeds[0].description.includes('h!treat')) {
		const MonsterName = msg.embeds[0].image.url.slice(41, -4);
		console.log(`${MonsterName} Spawn...`);
		switch (config.monster) {
			case true:
				await msg.channel.send('h!trick');
				const checkmessage1 = await msg.channel.fetchMessage(msg.id);
				if (
					checkmessage1.embeds[0].description.includes(`<@${spook.user.id}>`)
				) {
					console.log(`Success spooking ${MonsterName}`);
				} else console.log(`Failed spooking ${MonsterName}`);
				break;

			case false:
				await msg.channel.send('h!treat');
				const checkmessage2 = await msg.channel.fetchMessage(msg.id);
				if (
					checkmessage2.embeds[0].description.includes(`<@${spook.user.id}>`)
				) {
					console.log(`Success spooking ${MonsterName}`);
				} else console.log(`Failed spooking ${MonsterName}`);
				break;
		}
		return;
	}
});

spook.login(config.token);

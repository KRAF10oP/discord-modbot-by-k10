const { LoadCommands, AoiClient } = require("aoi.js");
const keepAlive = require(`./server`);
const { Util } = require('aoi.js');
const { parse, createAst } = require('aoi.parser');
const {
    parseExtraOptions
} = require('aoi.parser/components');

Util.parsers.ErrorHandler = parse;

Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}

const bot = new AoiClient({
    token: "",
    prefix: "a!",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans", "GuildVoiceStates", "GuildMessageTyping", "GuildMembers", "GuildInvites", "GuildMessageReactions", "GuildPresences"],
    events: ["onMessage", "onBanAdd", "onBanRemove", "onMessageDelete", "onMessageUpdate", "onChannelCreate", "onChannelDelete", "onChannelUpdate", "onMemberUpdate", "onGuildJoin", "onGuildLeave", "onJoin", "onLeave", "onInteractionCreate", "onReactionAdd", "onVoiceStateUpdate", "onFunctionError", "onPresenceUpdate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue",
        }

    },
    respondOnEdit: {
        commands: true
    },
    disableFunctions: ["$clientToken", "$setClientAvatar"],

    suppressAllErrors: true

})
require('./variables/variables')(bot);
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")

keepAlive();
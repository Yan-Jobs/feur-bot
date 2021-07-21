const BaseEvent = require("../base/BaseEvent");

module.exports = class ReadyEvent extends BaseEvent {
    constructor() {
        super("ready");
    }

    async run(client) {
        client.user.setActivity('dnd')
        console.log(
            `Logged as ${client.user.tag} in ${client.guilds.cache.size} !`
        ); // Console log ready
        await client.guilds.cache.get('867101383152893982')?.commands.create(
            {
                name: "hello",
                description: "Reply with Hello because I LOVE U !",
            }
        ).then((create) => {
            console.log("posted")
        });
    }
};
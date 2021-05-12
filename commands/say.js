var { prefix } = require('../config.json')

module.exports = {
    commands: ["say"],
    expectedArgs: "args",
    permissionerror: "You dont have the perms",
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {
      message.delete();
      var content = message.content.replace(`${prefix}say`, '')
      message.channel.send(content)
    },
    requiredRoles: [],
    permissions: ["ADMINISTRATOR"],
  };
  
const {prefix} = require('../config.json')

module.exports = {
    commands: ["say"],
    expectedArgs: "Stuff",
    permissionerror: "You dont have the perms",
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {
       
       const content = message.content.replace(`${prefix}say`, '')
       message.delete()
      message.channel.send(content)
    },
    requiredRoles: [],
    permissions: ['ADMINISTRATOR'],
  };
  
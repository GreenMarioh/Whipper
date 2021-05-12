module.exports = {
    commands: ["say"],
    expectedArgs: "args",
    permissionerror: "You dont have the perms",
    minArgs: 1,
    maxArgs: null,
    callback: (message, arguments, text) => {
      message.delete();
      message.channel.send(arguments)
    },
    requiredRoles: [],
    permissions: ["ADMINISTRATOR"],
  };
  
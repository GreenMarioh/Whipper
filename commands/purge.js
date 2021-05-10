const sendMessage = require("../send-message");
module.exports = {
  commands: ["purge", "bulkdelete"],
  expectedArgs: "(number of messages)",
  permissionerror: "You dont have the perms",
  minArgs: 1,
  maxArgs: 1,
  callback: (message, arguments, text) => {
    regEx = /^[1-9][0-9]?$/;
    regExTest = regEx.test(+arguments[0]);
    // console.log(regExTest)
    if (!regExTest) {
      sendMessage(message.channel, "Enter a valid number between 1-99", 3);
    } else {
      message.channel.bulkDelete(+arguments[0] + 1).catch(console.error);

      sendMessage(
        message.channel,
        `<@${message.author.id}>, purged ${+arguments[0]} messages`,
        3
      );
    }
  },
  requiredRoles: [],
  permissions: ["MANAGE_MESSAGES"],
};

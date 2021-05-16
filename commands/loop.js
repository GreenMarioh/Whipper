const sendMessage = require("../send-message");

module.exports = {
    commands: ["loop"],
    expectedArgs: "",
    permissionerror: "You dont have the perms",
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        var i = 0 
        while ( i >= 0) {
        
            
        sendMessage(message.channel, 'test', 6)
     i++}
        ;
    },
    requiredRoles: [],
    permissions: [],
  };
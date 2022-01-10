const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  commands: ["valagent"],
  expectedArgs: "",
  permissionerror: "You dont have the perms",
  minArgs: 0,
  maxArgs: 1,
  callback: (message, arguments, text) => {
    const agentName = arguments[0];
    fetch(
      `https://valorant-api.com/v1/agents`
    )
      .then((res) => res.json())
      .then((data) => {
        // if (data.global == null) {
        //   message.channel.send("Enter a valid origin ID");
        // } else {
        
          var meta = data[agentName]
          console.log(agentName)
        // }
      })
      .catch(console.error);
  },
  requiredRoles: [],
  permissions: [],
};

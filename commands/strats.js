const Discord = require("discord.js");

const { prefix } = require("../config.json");

module.exports = {
  commands: "strat",
  expectedArgs: "`[mapName] [attack/defense]`",
  permissionerror: "You dont have the perms",
  minArgs: 2,
  maxArgs: 2,
  callback: (message, arguments, text) => {
    const stratsList = require("../script");

    const messageContent = message.content.replace(">strat ", "");
    var stratDescription;
    var stratTitle;

    if (messageContent.toLowerCase() === "bind attack") {
      var choice = Math.floor(
        Math.random() * stratsList.bindStratsAttackers.length
      );
      stratNameBindAttack = stratsList.bindStratsAttackers[choice][0];
      stratBindAttack = stratsList.bindStratsAttackers[choice][1];

      stratTitle = stratNameBindAttack;
      stratDescription = stratBindAttack;
    } else if (messageContent.toLowerCase() === "bind defense") {
      var choice = Math.floor(
        Math.random() * stratsList.bindStratsDefenders.length
      );
      stratNameBindDefense = stratsList.bindStratsDefenders[choice][0];
      stratBindDefense = stratsList.bindStratsDefenders[choice][1];

      stratTitle = stratNameBindDefense;
      stratDescription = stratBindDefense;
    } else if (messageContent.toLowerCase() === "haven defense") {
      var choice = Math.floor(
        Math.random() * stratsList.havenStratsDefenders.length
      );
      stratNameHavenDefense = stratsList.havenStratsDefenders[choice][0];
      stratHavenDefense = stratsList.havenStratsDefenders[choice][1];

      stratTitle = stratNameHavenDefense;
      stratDescription = stratHavenDefense;
    } else if (messageContent.toLowerCase() === "haven attack") {
      var choice = Math.floor(
        Math.random() * stratsList.havenStratsAttackers.length
      );
      stratNameHavenAttack = stratsList.havenStratsAttackers[choice][0];
      stratHavenAttack = stratsList.havenStratsAttackers[choice][1];

      stratTitle = stratNameHavenAttack;
      stratDescription = stratHavenAttack;
    } else if (messageContent.toLowerCase() === "split attack") {
      var choice = Math.floor(
        Math.random() * stratsList.splitStratsAttackers.length
      );
      stratNameSplitAttack = stratsList.splitStratsAttackers[choice][0];
      stratSplitAttack = stratsList.splitStratsAttackers[choice][1];

      stratTitle = stratNameSplitAttack;
      stratDescription = stratSplitAttack;
    } else if (messageContent.toLowerCase() === "split defense") {
      var choice = Math.floor(
        Math.random() * stratsList.splitStratsDefenders.length
      );
      stratNameSplitDefense = stratsList.splitStratsDefenders[choice][0];
      stratSplitDefense = stratsList.splitStratsDefenders[choice][1];

      stratTitle = stratNameSplitDefense;
      stratDescription = stratSplitDefense;
    } else if (messageContent.toLowerCase() === "ascent attack") {
      var choice = Math.floor(
        Math.random() * stratsList.ascentStratsAttackers.length
      );
      stratNameAscentAttack = stratsList.ascentStratsAttackers[choice][0];
      stratAscentAttack = stratsList.ascentStratsAttackers[choice][1];

      stratTitle = stratNameAscentAttack;
      stratDescription = stratAscentAttack;
    } else if (messageContent.toLowerCase() === "ascent defense") {
      var choice = Math.floor(
        Math.random() * stratsList.ascentStratsDefenders.length
      );
      stratNameAscentDefense = stratsList.ascentStratsDefenders[choice][0];
      stratAscentDefense = stratsList.ascentStratsDefenders[choice][1];

      stratTitle = stratNameAscentDefense;
      stratDescription = stratAscentDefense;
    } else if (stratTitle === undefined || stratDescription === undefined) {
      message.channel.send(
        `**Usage:** \`${prefix}strat [mapName] [attack/defense]\``
      );
      return;
    }

    const stratEmbed = new Discord.MessageEmbed()
      .setAuthor("Random VALORANT Strat")
      .setColor("#FF4655")
      .setThumbnail("https://cdn.discordapp.com/emojis/683973971984777299.png")
      .setTitle(stratTitle)
      .setDescription(`<@${message.author.id}> ${stratDescription}`)
      .setFooter(
        "Powered by valorantstratroulette.netlify.app and Captain Pre",
        message.author.displayAvatarURL()
      );
    message.channel.send(stratEmbed);
  },
  requiredRoles: [],
  permissions: [],
};

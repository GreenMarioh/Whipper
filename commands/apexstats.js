const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  commands: ["apex", "apexstats"],
  expectedArgs: "(Origin username)",
  permissionerror: "You dont have the perms",
  minArgs: 1,
  maxArgs: 1,
  callback: (message, arguments, text) => {
    const username = arguments[0];
    fetch(
      `https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=${username}&auth=3AK36upGBaXIzUydMd7W`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.global == null) {
          message.channel.send("Enter a valid origin ID");
        } else {
          let result = data.global;
          let name = result.name;
          let rank = `${result.rank.rankName} ${result.rank.rankDiv}`;
          let rankImg = result.rank.rankImg;
          let avatar = result.avatar;
          let level = result.level;
          let image = data.legends.selected.ImgAssets.banner;

          const ApexStats = new Discord.MessageEmbed()
            .setTitle(`Apex stats for ${name}`)
            .addField("Rank: ", rank, true)
            .setThumbnail(rankImg)
            .setImage(image)
            .setColor("#f36a12")
            .setDescription(`Level: **${level}**`)
            .setFooter(
              `Invoked by ${message.author.username}#${message.author.discriminator}`,
              avatar
            );

          message.channel.send(ApexStats);
          // console.log(data)
        }
      })
      .catch(console.error);
  },
  requiredRoles: [],
  permissions: [],
};

eeemodule.exports = {
// [General]
name: "ChatController", // Name of plugin REQUIRED
author: "Dandevelopment", // author REQUIRED
description: 'Lets you set chat messages appear in cycles.', // Desciprtion
minVersion: '3.2.5', // minimum version requirements (optional)
version:  '1.0.0', // version REQUIRED
addToHelp: ["setmsginterval [message] [interval]"], // add to help
 commands: {
  setmsginterval: require('./msg.js')
  
 }, // commands
 configFile: 'config.ini', //config file
// [Functions]
init: function (data,configs) {
 data.main._intchatName = configs.name
 var a = configs.color
 if (a) a = a.split(",")
 if (a) a = {
  r:a[0],
  b:a[1],
  g:a[2]
 }
 data.main._intChatColor = a
  // init, Used to do stuff such as overriding things
}
}

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
 configFile: false, //config file
// [Functions]
init: function (data,configs) {
  // init, Used to do stuff such as overriding things
}
}

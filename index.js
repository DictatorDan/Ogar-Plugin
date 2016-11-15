
module.exports = {
// [General]
name: "Sample Plugin", // Name of plugin REQUIRED
author: "AJS Development", // author REQUIRED
description: 'Sample plugin for OpenAgar', // Desciprtion
minVersion: '1.0.0', // minimum version requirements (optional)
version:  '1.0.0', // version REQUIRED
addToHelp: ["You can add to the help command", "like this, useful for adding commands"], // add to help
 commands: {
 lol: require('./lol.js')
 }, // commands
 configFile: 'config.ini', //config file. You can add configs!
// [Functions]
init: function (data,configs) {  // init, Used to do stuff such as overriding things

/* the data object ALLWAYS has
main: Object, // the server object
log: Bound Function // log to the console using this
*/
data.log("Your plugin configs")
data.log(configs)
},
beforeSpawn: function(data) {
var player = data.player // player object
   return true; // return false to deny player from spawn
}
}

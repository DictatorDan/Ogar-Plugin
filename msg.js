module.exports = function(str,main,log) {
   //str = typed into console
  //main = API's
  //log = console.log
  
  str = str.split(" ")
  var message = str.slice(2).join(" ") 
  var time = parseInt(str[1])
  if (isNaN(time)) {
   return log("cya{[OpenAgar]} Please specify a valid interval time! (In seconds)".styleMe()) 
  }
  
  setInterval(function() {
  main.broadcast(message,main._chatIntName,main._chatIntColor)
  
  },1000 * time)
}

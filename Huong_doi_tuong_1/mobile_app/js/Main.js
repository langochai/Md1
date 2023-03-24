let samsung = new Mobile("samsung")
let iphone= new Mobile("iphone14")

samsung.writeMessage("hello")
samsung.sendMessage(iphone)
samsung.writeMessage("nice to meet you")
samsung.sendMessage(iphone)

console.log(iphone.getInbox())
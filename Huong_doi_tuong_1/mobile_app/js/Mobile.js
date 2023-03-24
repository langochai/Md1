class Mobile{
    name
    battery
    status
    message
    inbox
    outbox
    constructor(name) {
        this.name = name
        this.battery = 100
        this.status = false
        this.message = ""
        this.inbox = []
        this.outbox = []
    }
    checkStatus(){
        this.decreaseBattery()
        return this.status
    }
    decreaseBattery(){
        if (this.battery > 0){
            this.battery --
        } else {
            this.turnOff()
        }
    }
    writeMessage(text){
        if (this.status){
            this.decreaseBattery()
            this.message = text
        }
    }
    turnOn(){
        this.decreaseBattery()
        this.status = true
    }
    turnOff(){
        this.status = false
    }
    changeBattery(){
        this.battery += 1
    }
    sendMessage(phone){
        this.decreaseBattery()
        let date = new Date()
        this.outbox.push(this.name + ":" + this.message + "time:" + date.getUTCDate())
        phone.inbox.push(this.name + ":" + this.message + "time:" + date.getUTCDate())
    }
    getInbox(){
        this.decreaseBattery()
        return this.inbox
    }
    getOutbox(){
        this.decreaseBattery()
        return this.outbox
    }
}
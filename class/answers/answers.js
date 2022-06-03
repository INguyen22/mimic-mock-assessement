var Chest = require("./chest")

class Dungeon {
    constructor () {
        this.treasure= 0
        this.rooms = []
        this.playerStatus = "Healthy"
    }

    openRoom (isMimic) {
            this.rooms.push({chest:new Chest(isMimic)})
    }


    openChests() {
        console.log("stuff")
        for(var i = 0; i < this.rooms.length; i++){
            
            if(this.rooms[i].chest.isMimic === true){
                this.treasure = 0
                this.playerStatus = "Wounded"
            } else {
                this.treasure += 10;
            }
        }
    }
}

module.exports = Dungeon;


class Chest {
    constructor (isMimic) {
        this.isMimic = isMimic || false
    }
}

module.exports = Chest;
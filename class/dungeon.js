var Chest = require("./chest")

class Dungeon {
  constructor() {
    this.treasure = 0
    this.playerStatus = 'Healthy'
    this.rooms = []
  }
  openRoom(boolean) {
    var chest = {chest:new Chest(boolean)}
    //console.log(chest)
    return this.rooms.push(chest)
  }
  openChests() {
    for (var i = 0; i < this.rooms.length; i++) {
          console.log('room', this.rooms[1].chest.isMimic)
      if (this.rooms[i].chest.isMimic === true) {
        this.playerStatus = 'Wounded'
        this.treasure = 0
      }
      if (!this.rooms[i].chest.isMimic) {
        this.treasure = this.treasure + 10
      }
    }
  }
}

module.exports = Dungeon;

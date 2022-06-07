var Chest = require("./chest")

class Dungeon {
  constructor() {
    this.treasure = 0
    this.playerStatus = 'Healthy'
    this.rooms = []
  }
  openRoom(boolean) {
    this.rooms.push({chest:new Chest(boolean)})
  }
  openChests() {
    console.log('room', this.rooms)
  for (var i = 0; i < this.rooms.length; i++) {
    if (this.rooms[i].chest.isMimic) {
    this.playerStatus = 'Wounded'
    this.treasure = 0
      }
    else {
       this.treasure += 10
        }
      }
    }
  }

module.exports = Dungeon;

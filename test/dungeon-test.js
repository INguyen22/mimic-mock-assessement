const chai = require('chai');
const assert = chai.assert;

var Dungeon = require("../class/dungeon")
var Chest = require("../class/chest")

describe("Chest", function() {
    it("should be a function", function() {
        assert.isFunction(Chest)
    })

    it("should be by default not a mimic", function() {
        var chest = new Chest()

        assert.equal(chest.isMimic, false)
    })
    it("should be able to be a mimic", function() {
        var chest = new Chest(true)

        assert.equal(chest.isMimic, true)
    })
})

describe('Dungeon', function() {
  it('should be a function', function() {
    assert.isFunction(Dungeon)
  });

  it("should have no treasure", function() {
    var dungeon =  new Dungeon()

    assert.equal(dungeon.treasure, 0)
  })

  it("should have a healthy player by default", function() {
    var dungeon = new Dungeon()

    assert.equal(dungeon.playerStatus, "Healthy")
  })

  it("should have no discovered rooms", function() {
    var dungeon = new Dungeon()

    assert.equal(dungeon.rooms.length, 0)
  })

  it("should be able to open a room and get a chest", function() {
        var dungeon = new Dungeon()

        dungeon.openRoom(false)
        dungeon.openRoom(false)

        var rooms = [
            {chest:new Chest(false)},
            {chest:new Chest(false)}
        ]

        assert.deepEqual(dungeon.rooms, rooms)
  })

  it("should get 10 gold for every chest thats not a mimic", function() {
    var dungeon = new Dungeon()

    dungeon.openRoom(false)
    dungeon.openRoom(false)

    dungeon.openChests()

    assert.deepEqual(dungeon.treasure, 20)
  })

  it("rooms should be able to have a mimic", function() {
    var dungeon = new Dungeon()

    dungeon.openRoom(false)
    dungeon.openRoom(true)

    var rooms = [
        {chest:new Chest(false)},
        {chest:new Chest(true)},
    ]

    assert.deepEqual(dungeon.rooms, rooms)
  })

  it("a mimic should be able to wound you and steal your gold", function() {
    var dungeon = new Dungeon()

    dungeon.openRoom(false)
    dungeon.openRoom(true)

    dungeon.openChests()

    assert.deepEqual(dungeon.treasure, 0)
    assert.deepEqual(dungeon.playerStatus, "Wounded")
  })
});

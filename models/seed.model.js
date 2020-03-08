const mongoose = require('mongoose')
const Schema = mongoose.Schema

const seedSchema = new Schema(
  {
    username: { type: String, required: true },
    seed: { type: String, required: true, unique: true },
    spawnCoordX: { type: Number, required: true },
    spawnCoordY: { type: Number, required: true },
    spawnCoordZ: { type: Number, required: true },
    nearVillageCoordX: { type: Number, required: true },
    nearVillageCoordY: { type: Number, required: true },
    nearVillageCoordZ: { type: Number, required: true },
    nearStrongholdCoordX: { type: Number, required: true },
    nearStrongholdCoordY: { type: Number, required: true },
    nearStrongholdCoordZ: { type: Number, required: true },
    numberOfEnderEyes: { type: Number, required: true },
    anythingSpecial: { type: String, required: false },
    toyCatIs: { type: Boolean, required: true },
    hasLoot: { type: Boolean, required: false },
    // villageJobs: {
    //   armorer: {type: Boolean, required: false},
    //   butcher: {type: Boolean, required: false},
    //   cartographer: {type: Boolean, required: false},
    hasCleric: { type: Boolean, required: false }
    //   farmer: {type: Boolean, required: false},
    //   fisherman: {type: Boolean, required: false},
    //   fletcher: {type: Boolean, required: false},
    //   leatherworker: {type: Boolean, required: false},
    //   librarian: {type: Boolean, required: false},
    //   stonemason: {type: Boolean, required: false},
    //   shepherd: {type: Boolean, required: false},
    //   toolsmith: {type: Boolean, required: false},
    //   weaponsmith: {type: Boolean, required: false},
    // },
  },
  {
    timestamps: true
  }
)

const Seed = mongoose.model('Seed', seedSchema)

module.exports = Seed

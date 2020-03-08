const router = require('express').Router()
let Seed = require('../models/seed.model')

router.route('/').get((req, res) => {
  Seed.find()
    .then(seeds => res.json(seeds))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const username = req.body.username
  const seed = req.body.seed
  
  const spawnCoordX = Number(req.body.spawnCoordX)
  const spawnCoordY = Number(req.body.spawnCoordY)
  const spawnCoordZ = Number(req.body.spawnCoordZ)

  const nearVillageCoordX = Number(req.body.nearVillageCoordX)
  const nearVillageCoordY = Number(req.body.nearVillageCoordY)
  const nearVillageCoordZ = Number(req.body.nearVillageCoordZ)

  const hasLoot = Boolean(req.body.hasLoot)

  const hasCleric = Boolean(req.body.hasCleric)

  const nearStrongholdCoordX = Number(req.body.nearStrongholdCoordX)
  const nearStrongholdCoordY = Number(req.body.nearStrongholdCoordY)
  const nearStrongholdCoordZ = Number(req.body.nearStrongholdCoordZ)

  const numberOfEnderEyes = Number(req.body.numberOfEnderEyes)

  const anythingSpecial = req.body.anythingSpecial

  const toyCatIs = Boolean(req.body.toyCatIs)

  const newSeed = new Seed({
    username,
    seed,
    spawnCoordX,
    spawnCoordY,
    spawnCoordZ,
    nearVillageCoordX,
    nearVillageCoordY,
    nearVillageCoordZ,
    hasLoot,
    hasCleric,
    nearStrongholdCoordX,
    nearStrongholdCoordY,
    nearStrongholdCoordZ,
    numberOfEnderEyes,
    anythingSpecial,
    toyCatIs
  })

  newSeed.save()
    .then(() => res.json('Seed Added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  Seed.findById(req.params.id)
    .then(seed => res.json(seed))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  Seed.findByIdAndDelete(req.params.id)
    .then(() => res.json("Seed Deleted"))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  Seed.findById(req.params.id)
    .then(seed => {
      seed.username = req.body.username
      seed.spawnCoordX = Number(req.body.spawnCoordX)
      seed.spawnCoordY = Number(req.body.spawnCoordY)
      seed.spawnCoordZ = Number(req.body.spawnCoordZ)
      seed.nearVillageCoordX = Number(req.body.nearVillageCoordX)
      seed.nearVillageCoordY = Number(req.body.nearVillageCoordY)
      seed.nearVillageCoordZ = Number(req.body.nearVillageCoordZ)
      seed.hasLoot = Boolean(req.body.hasLoot)
      seed.hasCleric = Boolean(req.body.hasCleric)
      seed.nearStrongholdCoordX = Number(req.body.nearStrongholdCoordX)
      seed.nearStrongholdCoordY = Number(req.body.nearStrongholdCoordY)
      seed.nearStrongholdCoordZ = Number(req.body.nearStrongholdCoordZ)
      seed.numberOfEnderEyes = Number(req.body.numberOfEnderEyes)
      seed.anythingSpecial = req.body.anythingSpecial
      seed.toyCatIs = Boolean(req.body.toyCatIs)

      seed.save()
        .then(() => res.json('Seed Updated!'))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
})




module.exports = router
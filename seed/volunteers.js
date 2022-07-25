const db = require('../db')
const { Volunteers, Shows } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const dracula = await Shows.find({ title: 'Dracula' })
  const gypsy = await Shows.find({ title: 'Gypsy' })

  const volunteers = [
    {
      name: 'Josh Langner',
      headShot: 'URL',
      role: 'Dracula',
      city: 'Spencer, IA',
      bio: 'I like dogs',
      resume: [dracula.title]
    },
    {
      name: 'Marty VanWestin',
      headShot: 'URL',
      role: 'Herbie',
      city: 'Sheldon, IA',
      bio: 'I like dogs',
      resume: [gypsy.title]
    }
  ]

  await Volunteers.insertMany(volunteers)
  console.log('Theater added volunteers to db!')
}
const run = async () => {
  await main()
  db.close()
}

run()

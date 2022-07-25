const db = require('../db')
const { Shows } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const shows = [
    {
      title: 'Dracula',
      poster: 'url',
      season: '65',
      dates: 'October 3, 4, 5 10, 11, 12',
      duration: '185 minutes',
      synopsis:
        'Lucy is plagued by anemia and mysterious night terrors. Her father, Dr. Sweard and her fiance, John Harker, call on the expertise of Professor VanHelsing to help solve the affliction. He tells them that it might be something far more sinister than illness. A vampire is in London.',
      castCrew: 'Pull these in from the other db when functioning'
    },
    {
      title: 'Clue-The Musical!',
      poster: 'url',
      season: '65',
      dates: 'December 8, 9, 10, 15, 16, 17',
      duration: '110 minutes',
      synopsis:
        "An interactive 'who-dunnit' musical based on the classic board game Clue.",
      castCrew: 'Pull these in from the other db when functioning'
    },
    {
      title: 'Savannah Sipping Society',
      poster: 'url',
      season: '65',
      dates: 'February 16, 17, 18, 25, 26, 17',
      duration: '95 minutes',
      synopsis:
        'Women from Savannah drink alcohol on the porch and talk about living their lives.',
      castCrew: 'Pull these in from the other db when functioning'
    },
    {
      title: 'Gypsy',
      poster: 'url',
      season: '65',
      dates: 'April 5, 6, 7, 12, 13, 14',
      duration: '220 minutes',
      synopsis:
        'Mama Rose pushes her daughters to be vaudville stars while vaudville is failing and giving away to burlesque.',
      castCrew: 'Pull these in from the other db when functioning'
    }
  ]

  await Shows.insertMany(shows)
  console.log('The theater has a list of shows!')
}
const run = async () => {
  await main()
  db.close()
}

run()

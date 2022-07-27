const db = require('./db')
const { Shows, Volunteers } = require('./models')

const updateShow = async () => {
  const updated = await Shows.updateOne()
  res.status(201).json(updated)
}

async function main() {
  try {
    await updateShow
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()

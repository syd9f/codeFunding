const db = require('../config/connection');
const { User } = require('../models');

const userData = require('./userSeeds.json');

db.once('open', async () => {
  await User.deleteMany({});

  const technologies = await User.insertMany(userData);

  console.log('Technologies seeded!');
  process.exit(0);
});

const db = require('../config/connection');
const { User, Project } = require('../models');
// const { Project } = require('../models');

const userData = require('./userSeeds.json');
const projectData = require('./projectSeeds.json');

// db.once('open', async () => {
//   await User.deleteMany({});

//   const users = await User.insertMany(userData);

//   console.log('Users seeded!');
//   process.exit(0);
// });

// db.once('open', async () => {
//   await Project.deleteMany({});

//   const projects = await Project.insertMany(projectData);

//   console.log('Projects seeded!');
//   process.exit(0);
// });

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Project.deleteMany({});
  
    const users = await User.insertMany(userData);
    const projects = await Project.insertMany(projectData);
  
    console.log('Users seeded!');
    console.log('Projects seeded!');
  
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
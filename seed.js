const { db, User, Crossword } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
};

seed()
  .then(() => {
    console.log('Successfully Seeded!');
    db.close();
  })
  .catch((error) => {
    console.error('Error!');
    console.error(error);
    db.close();
  });

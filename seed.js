const { db, User, Crossword } = require('./server/db');
const cs1 = require('./public/crosswords/cs1');
const cs2 = require('./public/crosswords/cs2');
const cs3 = require('./public/crosswords/cs3');
const cs4 = require('./public/crosswords/cs4');
const cs5 = require('./public/crosswords/cs5');
const dataFormatter = require('./public/crosswords/conversion');

const data = [cs1, cs2, cs3, cs4, cs5];
const crosswords = data.map((crossword) => {
  return {
    name: crossword.title,
    date: new Date(crossword.date),
    difficulty: `${
      crossword.dow === 'Monday' || crossword.dow === 'Tuesday'
        ? 'easy'
        : crossword.dow === 'Wednesday' || crossword.dow === 'Thursday'
        ? 'medium'
        : 'hard'
    }`,
    author: crossword.author,
    data: JSON.stringify(dataFormatter(crossword)),
  };
});

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      crosswords.map((crossword) => {
        return Crossword.create(crossword);
      })
    );
  } catch (error) {
    console.log(error);
  }
};

seed()
  .then(() => {
    console.log('Successfully Seeded!');
    db.close();
  })
  .catch((err) => {
    console.error('Error!');
    console.error(err);
    db.close();
  });

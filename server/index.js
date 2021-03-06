const express = require('express');

const app = express();
const morgan = require('morgan');
const path = require('path');
const { db } = require('./db');
const api = require('./api');

app.use(express.json);
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

//  404 Error
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//  500 Error
app.use((err, req, res) => {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send(`something went wrong: ${err.message}`);
});

async function init() {
  try {
    console.log('syncing');
    await db.sync();
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

init();

const express = require('express');
const mongoose = require('mongoose');
const incidentsRouter = require('./routes/incidents');
const virusesRouter = require("./routes/viruses");
const dbUrl = 'mongodb://127.0.0.1:27017/test';
const app = express();

app.use(express.json())
app.use('/api/incident', incidentsRouter);
app.use("/api/virus", virusesRouter);

mongoose.connect(dbUrl)
  .then(() => console.log('Successfully connected to DB'))
  .catch(err => console.log(`Could not connect due to: ${err}`));

app.on('error', err => console.log(`Cannot connect to server ${err}`));

app.listen(3000, () => {
  console.log('the server is listening on port 3000');
});

require('./db').initDb();
const express = require('express');
const path = require('path');
const messagesRouter = require('./routes/messages');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/messages', messagesRouter);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
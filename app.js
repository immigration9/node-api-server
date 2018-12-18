const express = require('express');
const app = express();

app.use('/users', require('./api/user'));
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server Running!');
})


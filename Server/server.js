const express = require('express');


const app = express();

app.get('/', (req,res) =>  res.json({ msg: 'Welcome to my world' }));

//Routes
app.use('/users', require('./routes/users'));
app.use('/contacts', require('./routes/contacts'));
app.use('/auth', require('./routes/auth'));


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
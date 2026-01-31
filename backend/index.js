const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
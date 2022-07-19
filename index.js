const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

var cors = require('cors')

const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json());
// Available Routes:
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get("/",(req,res)=>{
  res.json("backend start");
})

app.listen(port, () => {
  console.log(`iNotes app listening on port ${port}`)
})
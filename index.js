const express = require('express');
const app = express();


const {authRoutes} = require('./routes/auth');
const {officeRoutes} = require('./routes/office');

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.use('/api/user', authRoutes);
app.use('/api/offices', officeRoutes);

app.listen(3000, ()=>{
    console.log("Server is up & running.")
})
const express = require('express');
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('HOla perros')
})

app.listen(3000, ()=> {
    console.log('¡Serer Up! en http://localhost:3000');
})
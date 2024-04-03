const express = require('express')
const app = express()
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors({
    origin: '*' 
}));

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (req, res) => {
    res.redirect('/swagger');
});

app.get('*', (req, res) => {
    res.redirect('/swagger');
});
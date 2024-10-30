const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require('./infraestrutura/sequelize');
const userRoute = require('./routes/userRouter');

app.use(express.json());
app.use(cors());
app.use('', userRoute)

sequelize.sync() 
  .then(() => {
    console.log('Tabelas sincronizadas');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar as tabelas:', err);
  });


app.listen(3000, (error) => {
    if (error) {
        console.log("Erro");
        return;
    }
    console.log("Subiu");
});
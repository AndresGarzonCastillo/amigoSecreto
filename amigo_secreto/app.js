const express = require('express');
const app = express();
const amigoSecretoRoutes = require('./routes/amigoSecretoRoutes');

app.use(express.json());

app.use('/amigo-secreto', amigoSecretoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

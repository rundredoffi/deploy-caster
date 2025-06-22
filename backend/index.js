require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createDeployment } = require('./github');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/deploy', async (req, res) => {
  try {
    const result = await createDeployment(req.body);
    res.status(200).json(result);
  } catch (err) {
    console.error('Erreur de déploiement :', err.response?.data || err.message);
    res.status(500).json({ error: 'Erreur lors de la création du déploiement' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 DeployCaster backend running at http://localhost:${PORT}`);
});

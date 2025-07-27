const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

// Substitua pelos seus dados
const API_KEY = 'SUA_API_KEY_AQUI'; // <-- Coloque sua API Key aqui
const PLACE_ID = 'SEU_PLACE_ID_AQUI'; // <-- Coloque seu Place ID aqui

app.get('/api/google-reviews', async (req, res) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=review,rating,user_ratings_total&key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    if (response.data && response.data.result && response.data.result.reviews) {
      res.json(response.data.result.reviews);
    } else {
      res.status(404).json({ error: 'Nenhuma avaliação encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar avaliações.' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
}); 
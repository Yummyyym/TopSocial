const express = require('express');
const { getCardById,postCard, deleteCardById } = require('../controllers/cardsController');
const cardsRouter = express.Router();

//get /api/cards?id=1 get card by id
cardsRouter.get('/', getCardById)
//post /api/cards post a card
cardsRouter.post('/', postCard)
//delete /api/cards/:card_id delete card by id
cardsRouter.delete('/:card_id', deleteCardById)

module.exports = cardsRouter;
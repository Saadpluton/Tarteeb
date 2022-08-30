import express from "express";

import {createCard} from '../../controllers/CustomersController/PaymentCardController/AddCard.js'
import {getAllCard} from '../../controllers/CustomersController/PaymentCardController/GetCard.js'
import {getCard} from '../../controllers/CustomersController/PaymentCardController/GetOneCard.js'
import {deleteCard} from '../../controllers/CustomersController/PaymentCardController/RemoveCard.js'

const router = express.Router();

//CREATE
router.post("/card", createCard);

//GET One
router.get("/card/:id", getCard);

//GET All
router.get("/card", getAllCard);

//Delete Card
router.get("/card/delete/:id", deleteCard);


export default router;

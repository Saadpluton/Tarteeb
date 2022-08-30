import Card from "../../../models/customers/Payment_Cards.js";

//Card Create

export const createCard = async (req, res, next) => {
  const customerCard = new Card(req.body);
  try {
    const savedcard = await customerCard.save();
    res.status(200).json(savedcard);
  } catch (err) {
    next(err);
  }
};


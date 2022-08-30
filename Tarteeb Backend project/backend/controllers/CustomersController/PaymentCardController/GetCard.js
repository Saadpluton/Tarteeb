import Card from "../../../models/customers/Payment_Cards.js";

// Get All Cards

export const getAllCard = async (req, res, next) => {
    try {
      const AllCard = await Card.find();
      res.status(200).json(AllCard);
    } catch (err) {
      next(err);
    }
  };
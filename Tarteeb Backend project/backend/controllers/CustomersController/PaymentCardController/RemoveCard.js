import Card from "../../../models/customers/Payment_Cards.js";

// Card Delete

export const deleteCard = async (req, res, next) => {
    try {
      await Card.findByIdAndDelete(req.params.id);
      res.status(200).json("Card has been deleted.");
    } catch (err) {
      next(err);
    }
  };
import Card from "../../../models/customers/Payment_Cards.js";

// Card Get Only Specific Id

export const getCard = async (req, res, next) => {
    try {
      const list = await Card.findById(req.params.id);
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  
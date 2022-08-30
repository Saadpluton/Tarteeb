import Service from "../../../models/stores/Services.js";

// Product Get All

export const getAllServices = async (req, res, next) => {
    try {
      const ServicesAll = await Service.find();
      res.status(200).json(ServicesAll);
    } catch (err) {
      next(err);
    }
  };
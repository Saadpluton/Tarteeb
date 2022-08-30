import Personal from "../../../models/customers/Personal.js";


// Customer Suspend

export const SuspendCustomer = async (req, res, next) => {
    const {id} = req.params ;
    
    try {
    
      const customer = await Personal.findById(id);

      const Suspend = await Personal.findByIdAndUpdate(id, { isSuspend: customer.isSuspend = true }, { new: true });
      
      res.status(200).json("Customer has been Suspend.");
    } catch (err) {
      next(err);
    }
  };
import Info from "../../../models/stores/General_info.js";


//BankDetails Update

export const updateBankDetails = async (req, res, next) => {
    try {
        const  BankName = req.body.Bank_name;
        const  BankAccount = req.body.Bank_account;
        
      const updateStore = await Info.findByIdAndUpdate(
        req.params.id,
        { "Bank_account" : BankAccount , "Bank_name" : BankName },
        { new: true }
      );
      res.status(200).json(updateStore);
    } catch (err) {
      next(err);
    }
  };
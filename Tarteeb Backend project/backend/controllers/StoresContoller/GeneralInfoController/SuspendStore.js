import Info from "../../../models/stores/General_info.js";


// Store Delete

export const SuspendStore = async (req, res, next) => {
    const {id} = req.params ;
    
    try {
    
      const store = await Info.findById(id);

      const Suspend = await Info.findByIdAndUpdate(id, { isSuspend: store.isSuspend = true }, { new: true });
      
      const uNSuspend = await Info.findByIdAndUpdate(id, { isSuspend: store.isSuspend != true }, { new: true });
      
      res.status(200).json("Store has been Suspend.");
    } catch (err) {
      next(err);
    }
  };
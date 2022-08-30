import Product from "../../../models/stores/Products.js";

// Product Get All

export const getjoining_product_and_service = async (req, res, next) => {
    try {
      const result = await Product.aggregate([
            { $lookup:
                {
                    from : 'services',
                    localField : 'Product_Id',
                    foreignField:'Product_Id',
                    as : 'Info'
                }
            },
            {
                $unwind : '$Info'
            }
        ]);
  
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };

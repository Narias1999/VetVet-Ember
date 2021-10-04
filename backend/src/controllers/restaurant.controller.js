import Restaurant from "../models/Restaurant";

export const getRestaurants = async (req, res, next) => {
  try {
    const { keyword } = req.query;
  
    let query = {};
  
    if (keyword) {
      const regex = {
        $regex: `${keyword}.*`,
        $options: 'i'
      };
      query =  { $or: [{ cusine: regex }, { city: regex }] };
    }
      
    const restaurants = await Restaurant.find(query);
    return res.json(restaurants);
  } catch (error) {
    next(error);
  }
};

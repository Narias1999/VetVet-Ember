import Restaurant from "../models/Restaurant";
import faker from "faker";


import { cities, cuisines } from "../data";

const randomIndex = (max) => Math.floor(Math.random() * (max + 1));


export const createRestaurants = async (total = 200) => {
  try {
    const count = await Restaurant.estimatedDocumentCount();

    // check for existing restaurants
    if (count > 0) return;

    const data = [];
    for (let i = 0; i < total; i++) {
      data.push({
        name: faker.company.companyName(),
        description: faker.lorem.paragraphs(2),
        cusine: cuisines[randomIndex(4)],
        city: cities[randomIndex(4)],
        image: faker.image.food(),
      });
    }
    // Create default restaurants
    await Restaurant.insertMany(data);
  } catch (error) {
    console.error(error);
  }
};

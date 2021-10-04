import { Router } from "express";
const router = Router();

import * as restaurantCtrl from "../controllers/restaurant.controller";

router.get("/", restaurantCtrl.getRestaurants);

export default router;

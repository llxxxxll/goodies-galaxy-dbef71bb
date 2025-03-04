
import { Product } from "../../types/product";
import { kitchenwareDrinkware } from "./drinkware";
import { kitchenwareCookingTools } from "./cookingTools";
import { kitchenwareAppliances } from "./appliances";
import { kitchenwareStorage } from "./storage";

// Combine all kitchenware products
export const kitchenwareProducts: Product[] = [
  ...kitchenwareDrinkware,
  ...kitchenwareCookingTools,
  ...kitchenwareAppliances,
  ...kitchenwareStorage,
];

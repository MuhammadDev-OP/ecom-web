import { type SchemaTypeDefinition } from "sanity";

import { product } from "./product";
import { category } from "./category";
import { heroImage } from "./heroImage";
import { crousel } from "./crousel";
import { sliderImage } from "./sliderImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, heroImage, crousel, sliderImage],
};

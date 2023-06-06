import { type SchemaTypeDefinition } from 'sanity'

import { product } from './product'
import { category } from './category'
import { heroImage } from './heroImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, heroImage],
}

import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    defineField({
      name: "category",
      title: "Product category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
});

import { defineType, defineField } from "sanity";

export const heroImage = defineType({
  name: "heroimage",
  type: "document",
  title: "heroImage",
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

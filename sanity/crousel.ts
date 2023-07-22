import { defineType, defineField } from "sanity";

export const crousel = defineType({
  name: "crousel",
  type: "document",
  title: "Crousel Details",
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
      name: "image",
      title: "Image",
      type: "image",
    }
  ]
})
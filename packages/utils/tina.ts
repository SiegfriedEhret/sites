export const tinaCommonFields = [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  {
    label: "Description",
    name: "description",
    type: "string",
    required: true,
  },
  {
    label: "Published at",
    name: "date",
    type: "datetime",
    required: true,
    ui: {
      utc: true,
    },
  },
  {
    label: "Updated at",
    name: "updatedAt",
    type: "datetime",
    required: true,
    ui: {
      utc: true,
    },
  },
  {
    type: "image",
    label: "Hero image",
    name: "image",
  },
  {
    label: "Image description",
    name: "imageDescription",
    type: "string",
  },
  {
    type: "rich-text",
    name: "body",
    label: "Body",
    isBody: true,
  },
  {
    label: "Tags",
    name: "tags",
    type: "string",
    list: true,
  },
];

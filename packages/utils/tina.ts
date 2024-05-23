export function imageUi(assetPrefix = "../../../public") {
  return {
    // is called on every form change but result is stored in data and not in the form value (saved to file but not displayed to the user)
    parse: (val?: string) => val && `${assetPrefix}${val}`,
    // Is called on every form change and the result is put back into the value of the form (displayed to the user)
    format: (val?: string) =>
      val && val.startsWith(assetPrefix) ? val.slice(assetPrefix.length) : val,
  };
}

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
    ui: imageUi(),
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

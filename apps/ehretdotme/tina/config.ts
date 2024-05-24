import { defineConfig } from "tinacms";
import { imageUi, tinaCommonFields } from "@packages/utils/tina";
import slugify from "slugify";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

const posts = {
  name: "post",
  label: "Posts",
  path: "src/content/posts",
  fields: [...tinaCommonFields],
};

const moppas = {
  name: "moppa",
  label: "MOPPA",
  path: "src/content/museum",
  ui: {
    filename: {
      slugify: (values) => {
        return slugify(
          `${values?.artistName} ${values?.name} ${values?.year}`,
        ).toLowerCase();
      },
    },
  },
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      required: true,
      isTitle: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "string",
      name: "artistName",
      label: "Artist Name",
      required: true,
    },
    {
      type: "string",
      name: "artistBirth",
      label: "Artist Birth",
      required: true,
    },
    {
      type: "string",
      name: "artistDeath",
      label: "Artist Death",
    },
    {
      label: "Shot",
      name: "shot",
      type: "datetime",
      required: true,
      ui: {
        utc: true,
      },
    },
    {
      type: "string",
      name: "location",
      label: "Location",
      required: true,
    },
    {
      type: "string",
      name: "year",
      label: "Year",
      required: true,
    },
    {
      name: "images",
      label: "Images",
      required: true,
      list: true,
      type: "object",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
          required: true,
          ui: imageUi(),
        },
        {
          type: "string",
          name: "imageDescription",
          label: "Image Description",
        },
      ],
      itemProps: (item) => ({
        key: item.id,
        label: item.image,
      }),
    },
  ],
};

export default defineConfig({
  branch,
  cmsCallback: (cms) => {
    cms.flags.set("branch-switcher", true);
    return cms;
  },
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [posts, moppas],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_TOKEN_SEARCH,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});

// @ts-nocheck

import { defineConfig } from "tinacms";
import { tinaCommonFields } from "@packages/utils/tina";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

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
    collections: [
      {
        name: "badidon",
        label: "Badidon",
        path: "src/content/badidon",
        fields: [
          ...tinaCommonFields,
          {
            type: "string",
            name: "audioUrl",
            label: "Audio URL",
            required: true,
          },
          {
            type: "number",
            name: "audioSize",
            label: "Audio Size (bytes)",
            required: true,
          },
          {
            type: "number",
            name: "audioDuration",
            label: "Audio Duration (seconds)",
            required: true,
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [...tinaCommonFields],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_TOKEN_SEARCH,
      stopwordLanguages: ["fra"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});

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
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
            ...tinaCommonFields
        ],
      },
    ],
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

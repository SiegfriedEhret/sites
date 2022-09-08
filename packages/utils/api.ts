import { Res } from "./types";

export async function getContent<T>(query: string): Promise<Res<T>> {
  const spaceId = "ceyupbj4b8x1";
  const environment = "master";
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
  const uri = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}?access_token=${accessToken}&query=${query}`;

  const res = await fetch(`${uri}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  return {
    status: res.status,
    body: await res.json(),
  };
}

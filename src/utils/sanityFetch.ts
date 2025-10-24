import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const fetchSanity = async (fetchSection: string) => {
  const query = groq`   *[_type=='${fetchSection}']{
        ...,
    } | order(orderPosition)`;

  const fetchedData = await client.fetch(query, {}, {cache: "no-store"});
  return fetchedData;
};

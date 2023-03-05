// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req.query;
  try {
    const { data } = await axios.request({
      url: `${process.env.AUTOCOMPLETE_URL}/${query}`,
      method: "GET",
    });
    res.status(200).json(data);
  } catch (error: any) {
    res.status(error.response.status).json(error);
  }
}

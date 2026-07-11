import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Permanently redirect the old sitemap URL to the new root sitemap URL
  // This ensures Bing Webmaster Tools and any other older integrations don't break.
  res.redirect(301, "/sitemap.xml");
}
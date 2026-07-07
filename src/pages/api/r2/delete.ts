import type { NextApiRequest, NextApiResponse } from "next";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { videoUrl } = req.body;

    if (!videoUrl) {
      return res.status(400).json({ error: "videoUrl is required" });
    }

    const accountId = process.env.R2_ACCOUNT_ID;
    const accessKeyId = process.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
    const bucketName = process.env.R2_BUCKET_NAME;
    const publicUrl = process.env.NEXT_PUBLIC_R2_URL;

    if (!accountId || !accessKeyId || !secretAccessKey || !bucketName || !publicUrl) {
      return res.status(500).json({ error: "R2 configuration missing" });
    }

    const key = videoUrl.replace(`${publicUrl}/`, "");

    const client = new S3Client({
      region: "auto",
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    await client.send(
      new DeleteObjectCommand({
        Bucket: bucketName,
        Key: key,
      })
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error deleting video:", error);
    return res.status(500).json({ error: "Failed to delete video" });
  }
}
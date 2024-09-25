// /app/api/route.ts

import { NextRequest, NextResponse } from "next/server";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { writeFile } from "fs/promises";

export async function POST(req: NextRequest) {
  const { img, mimeType, displayName } = await req.json();
  const { API_KEY } = process.env;
  if (!img) {
    return NextResponse.json({ message: "image not found" }, { status: 500 });
  }
  if (!API_KEY) {
    return NextResponse.json({ message: "API key not found" }, { status: 500 });
  }
  const tmpFile = "/tmp/drawToCalc.jpg";
  await writeFile(tmpFile, img, "base64");

  const fileManager = new GoogleAIFileManager(API_KEY);
  try {
    const uploadResult = await fileManager.uploadFile(tmpFile, {
      mimeType,
      displayName,
    });
    return NextResponse.json({
      message: `Uploaded file ${uploadResult.file.displayName}`,
      uri: uploadResult.file.uri,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "File upload failed", error: error },
      { status: 500 },
    );
  }
}

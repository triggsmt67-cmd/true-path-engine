import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  return handleRevalidate(request);
}

export async function PUT(request: NextRequest) {
  return handleRevalidate(request);
}

async function handleRevalidate(request: NextRequest) {
  const requestBody = await request.text();
  const { paths, tags } = requestBody
    ? JSON.parse(requestBody)
    : { paths: [], tags: [] };
  let revalidated = false;

  const secret = request.headers.get("X-Headless-Secret-Key");
  
  if (!process.env.HEADLESS_SECRET) {
    console.error("HEADLESS_SECRET is not defined in environment variables.");
    return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
  }

  if (secret !== process.env.HEADLESS_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    if (paths && Array.isArray(paths) && paths.length > 0) {
      paths.forEach((path: string) => revalidatePath(path));
      console.log("Revalidated paths:", paths);
      revalidated = true;
    }

    if (tags && Array.isArray(tags) && tags.length > 0) {
      tags.forEach((tag: string) => {
        // Next.js 16 requires a profile argument (usually 'default' or a CacheLifeConfig)
        revalidateTag(tag, "default");
      });
      console.log("Revalidated tags:", tags);
      revalidated = true;
    }

    // Always revalidate the home and blog index as a safety measure
    revalidatePath("/");
    revalidatePath("/blog");

    return NextResponse.json({
      revalidated,
      now: Date.now(),
      paths,
      tags: tags,
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating paths or tags" },
      { status: 500 },
    );
  }
}


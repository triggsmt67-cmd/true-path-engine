import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function PUT(request: NextRequest) {
  const url = new URL(request.url);
  // Allow secret from the URL parameter OR the header
  const secret = url.searchParams.get("secret") || request.headers.get("X-Headless-Secret-Key");

  if (secret !== process.env.HEADLESS_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    // We can confidently revalidate the "wordpress" tag without needing specific payloads
    // This allows free webhook plugins to trigger the flush without custom raw payloads.
    // @ts-expect-error Next.js 16 revalidateTag expects 2 arguments
    revalidateTag("wordpress");
    console.log("Revalidated tag: wordpress");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      tags: ["wordpress"],
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating paths or tags" },
      { status: 500 },
    );
  }
}

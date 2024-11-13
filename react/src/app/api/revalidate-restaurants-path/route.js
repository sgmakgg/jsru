import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export function GET() {
  revalidatePath("/restaurants");

  return NextResponse.json({ status: "success" });
}

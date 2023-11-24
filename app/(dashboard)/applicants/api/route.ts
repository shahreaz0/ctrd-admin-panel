import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(dashboard)/users/data/users.json")
  );

  return NextResponse.json({ data: JSON.parse(data.toString()) });
}

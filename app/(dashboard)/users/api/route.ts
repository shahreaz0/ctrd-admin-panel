import fs from "fs/promises";
import path from "path";

export async function GET() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(dashboard)/users/data/users.json")
  );

  return Response.json({ data: JSON.parse(data.toString()) });
}

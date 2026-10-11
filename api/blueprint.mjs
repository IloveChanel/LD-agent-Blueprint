import { buildBlueprint } from "../src/blueprint.mjs";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const projectName = String(body.projectName || "").trim();
  if (!projectName) return Response.json({ ok: false, error: "Project name is required." });
  return Response.json({ ok: true, ...buildBlueprint(body) });
}

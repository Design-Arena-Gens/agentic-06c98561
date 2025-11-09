import { NextResponse } from "next/server";
import { demoSeries } from "@/lib/demoData";
import { analyze } from "@/lib/analysis";

export const revalidate = 0; // always fresh in API

export async function GET() {
  // Placeholder for future live data integration via env keys.
  // For now, use demo data to ensure app works without secrets.
  const result = analyze({ series: demoSeries, maxPrice: 50 });
  return NextResponse.json({
    ok: true,
    source: "demo",
    disclaimer:
      "Educational demo. Synthetic sample data. This is not investment advice.",
    result,
  });
}

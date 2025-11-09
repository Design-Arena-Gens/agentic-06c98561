import { ResultCard, type Result } from "@/components/ResultCard";

async function getAnalysis(): Promise<{
  ok: boolean;
  source: string;
  disclaimer: string;
  result: Result;
}> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/analyze`, {
    // support both edge and node runtimes
    cache: "no-store",
    next: { revalidate: 0 },
  });
  return res.json();
}

export default async function Page() {
  const data = await getAnalysis();
  return (
    <main>
      <div className="container">
        <div style={{ marginBottom: 16 }}>
          <h1 className="title" style={{ margin: 0 }}>Indian Stocks Under ?50</h1>
          <div className="subtitle">2-day momentum screener (demo)</div>
        </div>

        <ResultCard data={data.result} />

        <div className="small" style={{ marginTop: 16 }}>
          Source: {data.source}. {data.disclaimer}
        </div>
      </div>
    </main>
  );
}

"use client";
import React from "react";

export type Result = {
  topPick: {
    symbol: string;
    name: string;
    lastClose: number;
    twoDayReturnPct: number;
    volumeSurgeRatio: number;
    momentumScore: number;
  } | null;
  ranked: Array<{
    symbol: string;
    name: string;
    lastClose: number;
    twoDayReturnPct: number;
    volumeSurgeRatio: number;
    momentumScore: number;
  }>;
  universeCount: number;
  filteredCount: number;
  notes: string[];
};

export function ResultCard({ data }: { data: Result }) {
  const top = data.topPick;
  return (
    <div className="card">
      <div className="header">
        <div>
          <div className="title">Best short-term momentum candidate</div>
          <div className="subtitle small">Universe: {data.filteredCount} under ?50 (of {data.universeCount})</div>
        </div>
        <span className="badge">
          <span>2-day view</span>
        </span>
      </div>

      {top ? (
        <div className="grid">
          <div className="col-8">
            <div className="kv">
              <div>Symbol</div>
              <div className="mono">{top.symbol}</div>
              <div>Name</div>
              <div>{top.name}</div>
              <div>Last close</div>
              <div className="mono">?{top.lastClose.toFixed(2)}</div>
              <div>2-day return</div>
              <div className="mono">{top.twoDayReturnPct.toFixed(2)}%</div>
              <div>Volume surge (2d vs prior 5d)</div>
              <div className="mono">{top.volumeSurgeRatio.toFixed(2)}?</div>
              <div>Composite momentum score</div>
              <div className="mono">{top.momentumScore.toFixed(2)}</div>
            </div>
          </div>
          <div className="col-4">
            <div className="disclaimer">
              This is a speculative, short-horizon signal derived from demo data. Markets are risky and highly volatile. Not investment advice.
            </div>
          </div>
        </div>
      ) : (
        <div>No qualifying candidate found under ?50.</div>
      )}

      <div className="footer">
        <div className="small">Ranking notes:</div>
        <ul className="small">
          {data.notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

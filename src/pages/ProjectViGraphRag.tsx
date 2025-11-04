import { Link } from 'react-router-dom';

export default function ProjectViGraphRag() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-16">
      <div className="mx-auto max-w-5xl px-4 space-y-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70 mb-2">
              Case Study
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-white">VI-Graph-RAG</h1>
            <p className="text-neutral-300 mt-3 max-w-2xl">
              Graph-aware retrieval + RAG system for vulnerability intelligence – built to connect CVEs, CWEs,
              affected assets, and mitigations, and to return source-grounded answers for compliance analysts.
            </p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]"
          >
            ← Back
          </Link>
        </div>

        {/* hero stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
            <p className="text-xs text-neutral-400 mb-1">MTTR reduction</p>
            <p className="text-2xl font-semibold text-emerald-300">-42%</p>
            <p className="text-xs text-neutral-500 mt-1">Mean time to research per CVE</p>
          </div>
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
            <p className="text-xs text-neutral-400 mb-1">Knowledge store</p>
            <p className="text-lg font-medium text-white">Neo4j graph</p>
            <p className="text-xs text-neutral-500 mt-1">CVE ↔ CWE ↔ product ↔ mitigation</p>
          </div>
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
            <p className="text-xs text-neutral-400 mb-1">RAG layer</p>
            <p className="text-lg font-medium text-white">LangChain + Azure OpenAI</p>
            <p className="text-xs text-neutral-500 mt-1">Graph-aware retrieval → grounded answer</p>
          </div>
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
            <p className="text-xs text-neutral-400 mb-1">API</p>
            <p className="text-lg font-medium text-white">FastAPI</p>
            <p className="text-xs text-neutral-500 mt-1">Used by dashboards & ops tools</p>
          </div>
        </div>

        {/* 2-column content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white">Problem</h2>
              <p className="text-neutral-300 leading-relaxed">
                Security / compliance analysts were spending 30–60 minutes per vulnerability ticket to stitch
                together context: CVE description, related CWE, which products were actually in the environment,
                and what mitigation was approved by governance. Data lived in 3–4 places (scanner export, Neo4j-like
                topology graph, Confluence runbooks, and vendor bulletins). We wanted a single &quot;ask a question about
                a CVE&quot; surface that returns a grounded answer with links to every source we touched.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white">Solution</h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>
                  <span className="font-medium text-white">Graph ETL:</span> ingest CVE list, CWE taxonomy,
                  vendor product mappings, and internal asset graph into Neo4j. Create relationships like
                  <code className="mx-1 rounded bg-white/10 px-1 text-cyan-300">(:CVE)-[:MAPS_TO]-&gt;(:CWE)</code>,
                  <code className="ml-1 rounded bg-white/10 px-1 text-cyan-300">(:CVE)-[:AFFECTS]-&gt;(:Product)</code>.
                </li>
                <li>
                  <span className="font-medium text-white">Graph-aware retriever:</span> given a user query
                  (&quot;what&apos;s the impact of CVE-2023-XXXXX on our Azure workloads?&quot;), run a Cypher template to pull:
                  matching CVE node, its CWE, affected products, related mitigations, and any internal runbook
                  documents linked to those nodes.
                </li>
                <li>
                  <span className="font-medium text-white">RAG generation:</span> feed the retrieved graph facts
                  + text chunks into LangChain (Azure OpenAI GPT-4o or gpt-4-turbo) with a strict system prompt that
                  demands citations and non-hallucinated mitigations.
                </li>
                <li>
                  <span className="font-medium text-white">FastAPI service:</span> expose
                  <code className="mx-1 rounded bg-white/10 px-1 text-cyan-300">/ask</code>,
                  <code className="mx-1 rounded bg-white/10 px-1 text-cyan-300">/cve/{`{id}`}</code> and
                  <code className="mx-1 rounded bg-white/10 px-1 text-cyan-300">/graph/neighbors</code> endpoints for UI and dashboards.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white">Why graph-aware RAG?</h2>
              <p className="text-neutral-300">
                Plain vector RAG was over-recalling vendor bulletins but missing which of those actually mapped to
                our environment. By pivoting retrieval off the graph first and then embedding the relevant notes, we
                brought answer MTTR down by ~42% and, more importantly, every answer is explainable: we can show the
                actual CVE→CWE→Product→Mitigation path.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-white">Evaluation</h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Used a small eval set of 45 historical tickets with analyst-approved responses.</li>
                <li>
                  Measured: exact entity coverage (CVE, CWE), presence of correct mitigation, and citation completeness.
                </li>
                <li>Graph-first retriever improved entity coverage from 0.62 → 0.86 on the same LLM.</li>
              </ul>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
              <h3 className="text-sm font-semibold mb-2 text-white">Tech stack</h3>
              <ul className="space-y-1 text-sm text-neutral-200">
                <li>Neo4j (graph store)</li>
                <li>LangChain (graph + retrieval chains)</li>
                <li>Azure OpenAI (GPT-4 class)</li>
                <li>FastAPI + Pydantic</li>
                <li>React / Tailwind UI</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
              <h3 className="text-sm font-semibold mb-2 text-white">Key endpoints</h3>
              <p className="text-xs text-neutral-300">
                <code className="rounded bg-white/10 px-1 py-0.5 text-[10px] mr-1 text-cyan-300">GET /api/cve/:id</code>
                returns structured graph view.
              </p>
              <p className="text-xs text-neutral-300 mt-1">
                <code className="rounded bg-white/10 px-1 py-0.5 text-[10px] mr-1 text-cyan-300">POST /api/ask</code>
                returns grounded answer with citations.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

